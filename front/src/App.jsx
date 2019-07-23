import React, { useEffect, useState } from 'react';
import './App.css';

import Board from './Component/Board'
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

const initialCarpetToApply = {
  raw_square1 : null,
  raw_square2 : null,
  column_square1 : null,
  column_square2 : null,
  position : true
}

const App = () => {
  const [squares, setSquares] = useState([])
  const [player, setPlayer] = useState(0)

  const [character, setCharacter] = useState({})
  const [characterMove, setCharacterMove] = useState(0)

  const [diceResult, setDiceResult] = useState(0)
  const [dispalyDiceResult, setDisplayDiceResult] = useState(0)

  const [carpets, setCarpets] = useState([])
  const carpetsPlayer = carpets.filter(carpet => carpet.playerID === player)
  const [carpetToApply, setCarpetToApply] = useState(initialCarpetToApply)

  useEffect(()=>{
    setPlayer(1)
    board((err, squaresData)=> setSquares(squaresData))
    seller(character, (err, sellerData)=> setCharacter(sellerData[0]))
    getCarpets({}, (err, carpetsData) => setCarpets(carpetsData))
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

  return (
  <main>
    <section className='board'>

    {/* Board */}
    <Board
        squares={squares}
        styleSquare={(i,j) => ({
          borderColor : '#fff',
          backgroundColor :  'grey'
        })}
        handleClickOnSquare={()=>{}}
      />

      {/* Carpets */}
      {carpets
        .filter(carpet => carpet.raw_square1 !== null)
        .map(carpet => 
          <Carpet 
            key={carpet.id} 
            {...{
              ...carpet,
              character
            }}
          />
        )
      }

      {/* Seller */}
      <section 
        className='seller'
        style={{
          marginTop : `${25 + (100)*character.raw}px`,
          marginLeft : `${25 + (100)*character.column}px`,
          transform : `rotate(${(character.direction - 1)*90}deg)`
        }}>
          <div></div>
      </section>

      {/* Square to put carpet on */}
      <Board
        squares={squares}
        styleSquare={(i,j) => ({
          opacity : '0.3',
          borderColor : 'transparent',
          backgroundColor :  isSquareAroundPlayer(character, j, i)  && 'green'
        })}
        handleClickOnSquare={(i,j)=>{
          setCarpetToApply({
            ... carpetToApply,
            raw_square1 : i,
            raw_square2 : carpetToApply.position ? i : i +1,
            column_square1 : j,
            column_square2 : carpetToApply.position ? j +1 : j
          })
        }}
      />

      <Carpet
        {...{
          ...carpetToApply,
          character
        }}
      />

    </section>

    {/* Commands */}
    <Command  
      {...{
        initialCharacter,
        character,
        setCharacter,
        setDiceResult,
        characterMove,
        setDisplayDiceResult,
        carpets,
        setCarpets,
        carpetToApply,
        setCarpetToApply
      }}
    />
    <p>Dice result : {dispalyDiceResult}</p>
  </main>
)}

export default App;
