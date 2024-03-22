import React from 'react'

function UserContact(props) {
  return (
    <>
      <span>Name : {props.userInfo.name}</span> <br />
      <span>email : {props.userInfo.email}</span> <br />
      <span>phone : {props.userInfo.phone}</span> <br />
      <span>id : {props.userInfo.id}</span> <br />
      <span>address : {props.userInfo.address}</span> <br />
    </>
  )
}

export default UserContact