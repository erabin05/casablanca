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
  const [dispalyDiceResult, setDisplayDiceResult] = useState(0)
  const [characterMove, setCharacterMove] = useState(0)

  const isSquareAroundPlayer = ({raw, column}, sc, sr) => {
    // sc === SquareColumn // sr === SquareRaw
    // cc === characterColumn // cr === characterRaw
    const cc = column
    const cr = raw
    if ((sc === cc-1 || sc === cc+1) && (cr+2 > sr) && (sr > cr-2)) {
      return true
    } else if ((sc === cc-2 || sc === cc+2) && (cr+1 > sr) && (sr > cr-1)) {
      return true
    } else if ((sc === cc) && ((sr > cr-3 && sr < cr) || (sr > cr && sr < cr+3))){
      return true
    } else {
      return false
    }
  }

  useEffect(()=>{
    board((err, squaresData)=> setSquares(squaresData))
    seller(character, (err, sellerData)=> setCharacter(sellerData[0]))
  },[])

  useEffect(()=> {
    console.log('start move')
    if (diceResult > 0 ) {
      moveCharacter(setCharacter, character, seller)
      setCharacterMove(diceResult-1)
      console.log('characterMove ' + characterMove)
      characterMove === 0 && setDiceResult(0)
    }
  } ,[diceResult])

  useEffect(()=> {
    if (characterMove > 0 ) {
      setTimeout(()=>{
        moveCharacter(setCharacter, character, seller)
        setCharacterMove(currentCountOfMove => currentCountOfMove - 1)
        console.log('characterMove ' + characterMove)
        characterMove === 1 && setDiceResult(0)
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
