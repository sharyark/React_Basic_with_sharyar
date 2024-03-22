import React from 'react'
import "./Puppie.css"
import Toy from './Toy'
function Puppie(props) {
  return (
    <>
    <div>
        {props.puppies.map((puppy) => {
            return (<div key={puppy.name} className='styled-div '>
            <span>
             {puppy.name}
            </span>
            <span>
                {/* Breed : {puppy.breed} */}
            </span>
            <br />
            <span>
                Age : {puppy.age} Year old
            </span>
            <br />
            
            <Toy toy={puppy.toys} nam={puppy.name} />
            </div>)
        })}
    </div>
    </>
  )
}

export default Puppie