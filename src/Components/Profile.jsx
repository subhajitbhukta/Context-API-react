import React, { useContext } from 'react'
import userContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(userContext);


    if (!user) return <div><h2>Please Enter user</h2></div>

    return <div><h2>Welcome {user.username}</h2></div>

}

export default Profile

