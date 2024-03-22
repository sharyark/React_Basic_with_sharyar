import {sculptureList} from '../../data/userlist'
import React, { useState } from 'react'
import UserCard from '../Usercad/UserCard'
import './userlist.css'

function UserList() {
    const [users,setusers] = useState(sculptureList)
    const handleDelete = (id) => 
    {
        console.log("testing",id)
        console.log("user id -")
        // const newArray = users.filter(user=> user.id !== id)
        const newArray = users.filter(user => user.id !== id);
        console.log(newArray)
        setusers(newArray)
    }
     
  return (
    <div>UserList
        <div className="card-container">
        <br />
        {users.map((user) => {
          return <UserCard key={user.id} user={user} fun={handleDelete}/>
        })}
    {/* <button onClick={()=>handleDelete(9)}>x</button> */}
        </div>
    </div>
  )
}


export default UserList