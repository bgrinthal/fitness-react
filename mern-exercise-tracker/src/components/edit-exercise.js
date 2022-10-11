import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function EditExercise({ match }) {
    // states and set states
    const [username, setUsername] = useState('');
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState();
    const [users, setUsers] = useState(['']);

    const userInput = useRef();

    useEffect(() => {
        axios.get('http://localhost:5555/exercises/' + ((window.location.href).split('/'))[4])
            .then(response => {
                    // setExercises( response.data )
                    setUsername(response.data.username)
                    setName(response.data.name)
                    setDescription(response.data.description)
                    setDuration(response.data.duration)
                    setDate(new Date((response.data.date)))
            })

        axios.get('http://localhost:5555/users/')
            .then(response => {
                if (response.data.length > 0) {
                    setUsers(response.data.map(user => user.username))
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

    function onChangeName(e) {
        setName(e.target.value)
    }

    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    function onChangDuration(e) {
        setDuration(e.target.value)
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
            duration: duration,
            date: date
        }
        console.log(exercise);

        //  sends (post) user to backend endpoint below
        axios.post('http://localhost:5555/exercises/update/'+ ((window.location.href).split('/'))[4], exercise)
            .then(res => console.log(res.data))

        window.location = '/'
    }

    return (
        <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref={userInput}
                        required
                        className="form-control"
                        value={username}
                        onChange={onChangeUsername}>
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
                <input
                        required
                        type="text"
                        className="form-control"
                        value={photo}
                        onChange={onChangPhoto}
                    />
                <div className="form-group">
                    <label>Exercise Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={onChangeName}
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
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={duration}
                        onChange={onChangDuration}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            // dateFromat='mm/dd/yyyy'
                            selected={date}
                            onChange={onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default EditExercise;

