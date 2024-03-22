import React from 'react'
function Greeting({name}) {
    const friendName = ['sharyar','usama','waeed','khan']
    // const friendNameList = friendName.map((friend)=> { return <li>{friend}</li>})
  return (
    <div >
        {friendName.map((friend) => <li key={friend}>{friend}</li>)}
        {/* {console.log(friendNameList)} */}
    hello {name.name}
    </div>
  )
}

export default Greeting