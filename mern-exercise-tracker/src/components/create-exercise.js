import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { NotificationContext } from '../Notifications/NotificationProvider';
import { v4 } from "uuid";

function CreateExercise() {
    const userInput = useRef();

    // states and set states
    const [username, setUsername] = useState('');
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState(['']);
    // notification
    const dispatchAdd = useContext(NotificationContext);

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

    function onChangPhoto(e) {
        setPhoto(e.target.value)
    }

    function onChangName(e) {
        setName(e.target.value)
    }

    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    function onChangeDate(date) {
        setDate(date)
    }

    // saves each exercise as their input
    function onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: username,
            photo: photo,
            name: name,
            description: description,
            date: date
        }
        console.log(exercise);

        //  sends (post) user to backend endpoint below
        axios.post('http://localhost:5555/exercises/add', exercise)
            .then(res => console.log(res.data))

        console.log(exercise)

        // window.location = '/'

        dispatchAdd({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                type: "SUCCESS",
                message: `${exercise.name} added! 💪✅`
            }
        })
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
                    <label>Exercise Photo : </label>
                    <input
                        required
                        type="file"
                        className="form-control"
                        value={photo}
                        onChange={onChangPhoto}
                    />
                </div>
                <div className="form-group">
                    <label>Exercise Name : </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={onChangName}
                    />
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