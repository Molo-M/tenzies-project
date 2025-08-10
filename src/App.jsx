import { useState } from 'react'
import './index.css'
import Dice from './components/Dice';
import diceData from './diceData'

export default function App() {
  // Create state to store dice data
  const [data, setData] = useState(diceData)
  // Map through the array to add the dice component to each element
  const dice = data.map(item => 
    <Dice 
    number={item.number} 
    key={item.id} />
  )
  // Function to make the dice number random
  function roll() {
    setData(prevItem =>
      prevItem.map(diceItem => ({
        ...diceItem,
        number: diceItem.state ? diceItem.number : Math.floor(Math.random() * 10) + 1
      }))
    )
  }
  return (
    <main>
      <div className="sm:w-[50%] rounded-3xl sm:justify-center bg-white flex flex-col gap-6 items-center text-center px-4 py-10">
        <h1 className="font-bold text-3xl">Tenzies</h1>
        <p className="text-xl">Roll until all the dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <section className="grid grid-cols-5 gap-6">
          {dice}
        </section>
        <button onClick={roll} className="bg-blue-700 hover:bg-blue-900 cursor-pointer text-white rounded-3xl text-2xl font-semibold py-2 w-30">Roll</button>
      </div>
    </main>
  )
}
