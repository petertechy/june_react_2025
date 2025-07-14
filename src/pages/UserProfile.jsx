import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {username} = useParams()
    console.log(username)
  return (
    <div>
        <h1>User Profile: {username}</h1>
    </div>
  )
}

export default UserProfile