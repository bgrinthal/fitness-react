import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { NotificationContext } from '../Notifications/NotificationProvider';
import { v4 } from "uuid";

// Exercise components to display each exercise on the list
// const Exercise = props => (

//     <div className="card mt-4" style={{ width: '18rem' }}>
//         <img className="card-img-top" src={props.exercise.photo} alt="Card image cap" />
//         <div className="card-body">
//             <h5 className="card-title">User: {props.exercise.username}</h5>
//             <p className="card-text">Name: {props.exercise.name}</p>
//             <p className="card-text">Description: {props.exercise.description}</p>
//             <p className="card-text">Date: {props.exercise.date ? props.exercise.date.substring(0, 10) : ''}</p>
//             <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
//         </div>
//     </div>
// );

function DailyRoutine() {


    // use effect to display on page load
    // useEffect(() => {
    //     axios.get('http://localhost:5555/exercises/')
    //         .then(response => {
    //             if (response.data.length > 0) {
    //                 setExercises(response.data)
    //             }
    //             console.log(response.data)
    //         })
    // }, [])

    // refactor to show all selected exercises
    function exerciseList() {
        // return exercises.map(currentexercise => {
        //     return (
        //         <div className="col-sm-3" key={currentexercise._id}>
        //             <Exercise exercise={currentexercise} deleteExercise={deleteExercise} />
        //         </div>
        //     )
        // })
    }
    //TODO: will cycle through chosen axercises picked by user
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm border rounded">
                    Picture
                </div>
                <div class="col-sm border rounded">
                    <h4>Exercise</h4>
                    <h4>Reps</h4>
                    <h4>Sets</h4>
                    <h4>Weight</h4>
                    <div className="form-group">
                        <input type="submit" value="Remove" className="btn btn-primary" />
                    </div>
                </div>
                <div class="col-sm border rounded">
                    Notes
                </div>
            </div>
        </div>
    )
}

export default DailyRoutine;