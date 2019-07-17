import React, { Component, useEffect, useState } from 'react';
import './App.css';

import { subscribe, board } from './api'

const App = () => {
  const [time, setTime] = useState('timeStamp')
  const [squares, setSquares] = useState([])
  useEffect(()=>{
    subscribe((err, timeStamp)=>setTime(timeStamp))
    board((err, squaresData)=> setSquares(squaresData))
    console.log(squares)
  },[])

  useEffect(()=>{
    console.log(squares)
  }, [squares])

  return (
  <main>
    <p>{time}</p>
  </main>
)}

export default App;
