import React from 'react'
import './userCard.css'
import Description from './Description'
function UserCard(props) {
  return (
  <>
        <div className="user-card">
        <h2>{props.user.name}</h2>
        <img className="img-style" src={props.user.url} alt="" />
        {/* <p>{props.user.description}</p> */}
        <Description user={{description : props.user.description}}/>
        <button onClick={()=>{props.fun(props.user.id)}}>X</button>
        </div>
  </>
  )
}

export default UserCard