import React, { Component, useEffect, useState } from 'react';
import './App.css';

import { subscribe, board } from './api'

const App = () => {
  const [time, setTime] = useState('timeStamp')
  const [squares, setSquares] = useState([])
  useEffect(()=>{
    subscribe((err, timeStamp)=>setTime(timeStamp))
    board((err, squaresData)=> setSquares(squaresData))
  },[])

  return (
  <main>
    <section className='board'>
      {squares.map((rows)=>(
        <div className='row'>
          {rows.map((square)=><div className='square'></div>)}
        </div>
      ))}
    </section>
    
  </main>
)}

export default App;
