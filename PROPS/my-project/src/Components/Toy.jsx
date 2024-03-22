import React from 'react'

function Toy(props) {
  return (
    <div>
        {props.toy.map((nam) => <h8> {props.nam} love to play with {nam}<br/></h8>)}
    </div>
  )
}

export default Toy