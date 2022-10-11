import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

// Exercise components to display each exercise on the list
const Exercise = props => (

    <div className="card mt-4" style={{ width: '18rem' }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">User: {props.exercise.username}</h5>
            <p className="card-text">Name: {props.exercise.name}</p>
            <p className="card-text">Description: {props.exercise.description}</p>
            <p className="card-text">Time(min): {props.exercise.duration}</p>
            <p className="card-text">Date: {props.exercise.date ? props.exercise.date.substring(0, 10) : ''}</p>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </div>
    </div>
);

function ExerciseList() {

    // states and set states
    const [exercises, setExercises] = useState([]);

    // use effect to display on page load
    useEffect(() => {
        axios.get('http://localhost:5555/exercises/')
            .then(response => {
                if (response.data.length > 0) {
                    setExercises(response.data)
                }
                console.log(response.data)
            })
    }, [])

    // delete exercise function
    function deleteExercise(id) {
        // pass in the selected exercise id
        axios.delete('http://localhost:5555/exercises/' + id)
            .then(res => console.log(res.data));
        // filters and displays everything that does not equal the id of the exercise selected
        setExercises(exercises.filter(el => el._id !== id))
    }

    function exerciseList() {
        return exercises.map(currentexercise => {
            return (
                <div className="col-sm-3" key={currentexercise._id}>
                    <Exercise exercise={currentexercise} deleteExercise={deleteExercise} />
                </div>
            )
        })
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <div className="table">
                <div className="thead-light">
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            {exerciseList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExerciseList;