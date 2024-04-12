import React, { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const { setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                onChange={(e) => {
                    console.log(setUsername(e.target.value));
                }}
                value={username}
                placeholder='username' />
            {" "}
            <input type="text"
                onChange={(e) => {
                    console.log(setPassword(e.target.value));
                }}
                value={password} placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default Login





