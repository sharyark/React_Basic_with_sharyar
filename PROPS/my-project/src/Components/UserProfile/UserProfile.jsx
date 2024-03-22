import React from 'react'

function UserProfile(props) {
  return (
    <>
    <span>avatar : {props.userProfil.avater}</span> <br />
    <span>bio : {props.userProfil.bio}</span> <br />
    </>
  )
}

export default UserProfile