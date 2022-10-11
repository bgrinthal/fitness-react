import React, { Component, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
    const userInput = useRef();

    // states and set states
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [exercise, setExercise] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState(['']);

    // use effect to display on page load
    useEffect(() => {
        axios.get('http://localhost:5555/users/')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username))
                    setUsername(response.data[0].username)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    // targets each input field
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    function onChangeExercise(e) {
        setExercise(e.target.value)
    }

    function onChangeDate(date) {
        setDate(date)
    }

    // saves each exercise as their input
    function onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            exercise: exercise,
            date: date
        }
        console.log(exercise);

        //  sends (post) user to backend endpoint below
        axios.post('http://localhost:5555/exercises/add', exercise)
            .then(res => console.log(res.data))

        window.location = '/'
    }


    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref={userInput}
                        required
                        className="form-control"
                        value={username}
                        onChange={onChangeUsername}>
                        {/* { maps over all users in users array creating drop down of each user } */}
                        {
                            users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={description}
                        onChange={onChangeDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Exercise (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={exercise}
                        onChange={onChangeExercise}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

}

export default CreateExercise;