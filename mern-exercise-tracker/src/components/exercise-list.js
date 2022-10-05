import React, { Component, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

// Exercise components to display each exercise on the list
const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
);

function ExerciseList() {

    // states and set states
    const [exercises, setExercises] = useState([]);

    // use effect to display on page load
    useEffect(() => {
        axios.get('http://localhost:5555/exercises/')
            .then(response => {
                if (response.data.length > 0) {
                    setExercises({ exercises: response.data })
                }
            })
    }, [])

    // delete exercise function
    function deleteExercises(id) {
        // pass in the selected exercise id
        axios.delete('http://localhost:5555/exercises/' + id)
            .then(res => console.log(res.data));
        // filters and displays everything that does not equal the id of the exercise selected
        setExercises(exercises.filter(el => el._id !== id))
            .catch((error) => {
                console.log(error)
            })
    }

    function exerciseList() {
        return exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercises={deleteExercises} key={currentexercise._id} />;
        })
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList()}
                </tbody>
            </table>
        </div>
    )
}

export default ExerciseList;