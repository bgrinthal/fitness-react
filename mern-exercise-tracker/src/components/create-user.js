import React, { Component, useState, useEffect, useRef } from 'react';


function CreateUser() {

    // states and set states
    const [username, setUsername] = useState('test user');

    // targets each input field
    function onChangeUsername(e) {
        setUsername(e.target.value)
    }

    // saves each exercise as their input
    function onSubmit(e) {
        e.preventDefault();

        const user = {
            username: username,
        }
        console.log(user);

        setUsername('')

        // window.location = '/'
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label> Username: </label>
                    <input type="text"
                    requered
                    className='form-control'
                    value={username}
                    onChange={onChangeUsername}
                    />
                </div>
                <div className='form-group'>
                    <input type="submit" value="Create User" className='btn btn-primary' />
                </div>
            </form>
        </div>
    )
}


export default CreateUser;