import React, { Component, useState, useEffect, useRef } from 'react';
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
    const userInput = useRef();

    const [users, setUsers] = useState(['test user']);
    const [username, setUsername] = useState('test user');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());

    // constructor(props) {
    //     super(props);

    //     this.onChangeUsername = this.onChangeUsername.bind(this);
    //     this.onChangeDescription = this.onChangeDescription.bind(this);
    //     this.onChangeDuration = this.onChangeDuration.bind(this);
    //     this.onChangeDate = this.onChangeDate.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);

    //     this.state = {
    //         username: '',
    //         description: '',
    //         duration: 0,
    //         date: new Date(),
    //         users: []
    //     }
    // }

    // function componentDidMount() {
    //     this.setState({
    //         users: ['test user'],
    //         username: 'test user'
    //     })
    //     // axios.get('http://localhost:5000/users/')
    //     //     .then(response => {
    //     //         if (response.data.length > 0) {
    //     //             this.setState({
    //     //                 users: response.data.map(user => user.username),
    //     //                 username: response.data[0].username
    //     //             })
    //     //         }
    //     //     })
    //     //     .catch((error) => {
    //     //         console.log(error);
    //     //     })

    // }

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    function onChangeDescription(e) {
        setDescription(e.target.value)
    }

    function onChangeDuration(e) {
        setDuration(e.target.value)
    }

    function onChangeDate(date) {
        setDate(date)
    }

    function onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date
        }
        console.log(exercise);

        // window.location = '/'
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
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={duration}
                            onChange={onChangeDuration}
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