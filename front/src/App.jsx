import React, { useEffect, useState } from 'react';
import './App.css';

import Command from './Component/Command'
import Carpet from './Component/Carpet'

import { board, seller, getCarpets } from './api'
import { moveCharacter } from './Gameplay/move'
import { isSquareAroundPlayer } from './Gameplay/carpetPosition'

const initialCharacter = { 
  raw: 3, 
  column: 3, 
  direction: 1, 
  rotation : 1,
}

const App = () => {
  const [squares, setSquares] = useState([])
  const [player, setPlayer] = useState(0)

  const [character, setCharacter] = useState({})
  const [characterMove, setCharacterMove] = useState(0)

  const [diceResult, setDiceResult] = useState(0)
  const [dispalyDiceResult, setDisplayDiceResult] = useState(0)

  const [carpets, setCarpets] = useState([])
  const [carpet, setCarpet] = useState({})

  useEffect(()=>{
    setPlayer(1)
    board((err, squaresData)=> setSquares(squaresData))
    seller(character, (err, sellerData)=> setCharacter(sellerData[0]))
    getCarpets(carpet, (err, carpetsData) => setCarpets(carpetsData))
  },[])

  useEffect(()=> {
    if (diceResult > 0 ) {
      moveCharacter(setCharacter, character, seller)
      setCharacterMove(diceResult-1)
      setDiceResult(0)
    }
  } ,[diceResult])

  useEffect(()=> {
    if (characterMove > 0 ) {
      setTimeout(()=>{
        moveCharacter(setCharacter, character, seller)
        setCharacterMove(currentCountOfMove => currentCountOfMove - 1)
      }, 1000)
    } 
  } ,[character])

  useEffect(()=>{console.log(carpets)},[carpets])

  return (
  <main>
    <section className='board'>

      {carpets
        .filter(carpet => carpet.raw_square1)
        .map(carpet => <Carpet {...carpet}/>)
      }

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
          {rows.map((square, j)=>
            <div 
              className='square' 
              key={j}
              style={{
                backgroundColor :  isSquareAroundPlayer(character, j, i)  && 'green'
              }}
            ></div>
          )}
        </div>
      ))}
    </section>
    <Command  
      {...{
        initialCharacter,
        character,
        setCharacter,
        setDiceResult,
        characterMove,
        setDisplayDiceResult
      }}
    />
    <p>Dice result : {dispalyDiceResult}</p>
  </main>
)}

export default App;
