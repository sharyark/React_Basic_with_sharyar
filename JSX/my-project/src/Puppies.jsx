
import React from 'react'
import "./Puppies.css"
function Puppies(props) {
  

    return (
    <div>
        {/* {console.log(props.puppi)} */}
        {props.puppi.map((obj)=>
        {
          return <> 
          <h5>Name:{obj.name}</h5>
          <h5>Age:{obj.age}</h5>
          <h5>Breed:{obj.breed}</h5>
          <ul>{obj.toys && obj.toys.map((i) => (<li>{i}</li>))}</ul>
          </>
        })}
    </div>
  )
}

export default Puppies