import { useState } from 'react'
import './index.css'
import Dice from './components/Dice'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  // Function that creates array of random numbers from 1 to 6
  function generateAllNewDice(size) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
      // Generate a random number between 1 and 6 (inclusive)
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      // Store it as an object in a variable
      let item = {value:randomNumber, isHeld:false, id:nanoid()}
      randomArray.push(item);
    }
    return randomArray;
  }

  // Create state to store dice data
  const [dice, setDice] = useState(() => generateAllNewDice(10))

  // Check if game conditions have been won:
  // 1) If all the dice are held
  const allHeld = dice.every(item => item.isHeld)
  // 2) If all their values are the same
  const allEqual = dice.every(item => item.value === dice[0].value)
  const gameWon = allHeld === true && allEqual === true



  // Map through the array to add the dice component to each element
  const dieElements = dice.map(item => 
    <Dice 
    key={item.id}
    number={item.value} 
    isHeld={item.isHeld}
    hold={() => hold(item.id)}
     />
  )

  // Function to re-roll the dice
  function roll() {
    setDice(prevItem =>
      prevItem.map(diceItem => ({
        ...diceItem,
        value: diceItem.isHeld ? diceItem.value : Math.floor(Math.random() * 6) + 1
      }))
    )
  }

  // Function that takes parameter when you click the dice 
  function hold(id) {
    setDice(prevItem =>
      prevItem.map(diceItem =>({
        ...diceItem,
        isHeld: id == diceItem.id ? !diceItem.isHeld: diceItem.isHeld
      }))
    )
  }
  // Function to start a new game
  function startOver() {
    setDice(prevItem =>
      prevItem.map(diceItem =>({
        ...diceItem,
        isHeld: false
      }))
    )
    roll()
  }
  
  return (
    <main>
      <div className="sm:w-[50%] rounded-3xl sm:justify-center bg-white flex flex-col gap-6 items-center text-center px-4 py-10">
        <h1 className="font-bold text-3xl">Tenzies</h1>
        <p className="text-xl">Roll until all the dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <section className="grid grid-cols-5 gap-6">
          {dieElements}
        </section>
        <button onClick={gameWon ? startOver: roll} className="bg-blue-700 hover:bg-blue-900 cursor-pointer text-white rounded-3xl text-xl sm:text-2xl font-semibold py-2 px-5">{gameWon ? "New Game" : "Roll"}</button>
      </div>
      {gameWon && <Confetti />}
    </main>
  )
}
