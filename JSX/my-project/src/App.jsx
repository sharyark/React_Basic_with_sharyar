import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import BedRoom from './BedRoom'
import Kitchen from './kitchen'
import Puppies from './Puppies'
function App() {
  const [count, setCount] = useState(0)

  const puppies = [
    {
      name: "Luna",
      breed: "Golden Retriever",
      age: 2,
      toys: ["Squeaky Bone", "Rope Toy", "Tennis Ball"]
    },
    {
      name: "Charlie",
      breed: "Labrador Retriever",
      age: 1,
      toys: ["Plush Bear", "Kong Toy", "Chew Ring"]
    },
    {
      name: "Max",
      breed: "Poodle",
      age: 3,
      toys: ["Frisbee", "Puzzle Toy", "Treat Ball"]
    },
    {
      name: "Bella",
      breed: "Beagle",
      age: 4,
      toys: ["Snuggle Buddy", "Crinkle Toy", "Noisy Chicken"]
    }
  ];
  


  return (
    <div>
      {/* <BedRoom Number={1}/> 
      <Kitchen />
      <BedRoom Number={2}/>  */}
      <Puppies puppi={puppies}/>
      </div>
  )
}

export default App
