import React, { useEffect, useState } from 'react';
import './App.css';

import Command from './Component/Command'

import { board, seller } from './api'
import { moveCharacter } from './move'

const initialCharacter = { 
  raw: 3, 
  column: 3, 
  direction: 1, 
  rotation : 1,
}

const App = () => {
  const [squares, setSquares] = useState([])
  const [character, setCharacter] = useState({})
  const [diceResult, setDiceResult] = useState(0)
  const [characterMove, setCharacterMove] = useState(0)

  useEffect(()=>{
    board((err, squaresData)=> setSquares(squaresData))
    seller(character, (err, sellerData)=> setCharacter(sellerData[0]))
  },[])

  useEffect(()=> {
    console.log(`dice result ${diceResult}`)
      moveCharacter(setCharacter, character, seller)
      setCharacterMove(diceResult-1)
  } ,[diceResult])

  useEffect(()=> {
    if (characterMove > 0 ) {
      setTimeout(()=>{
        moveCharacter(setCharacter, character, seller)
        setCharacterMove(currentCountOfMove => currentCountOfMove - 1)
      }, 1000)
    } 
  } ,[character])

  return (
  <main>
    <section className='board'>
      <section 
        className='seller'
        style={{
          marginTop : `${25 + (100)*character.raw}px`,
          marginLeft : `${25 + (100)*character.column}px`,
          transform : `rotate(${(character.direction - 1)*90}deg)`
        }}>
          <div></div>
      </section>
      {squares.map((rows, i)=>(
        <div className='row' key={i}>
          {rows.map((square, index)=><div className='square' key={index}></div>)}
        </div>
      ))}
    </section>
    <Command  
      {...{
        initialCharacter,
        character,
        setCharacter,
        setDiceResult,
        characterMove
      }}
    />
    <p>Dice result : {diceResult}</p>
  </main>
)}

export default App;
