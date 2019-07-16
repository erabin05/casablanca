import React, { Component, useEffect, useState } from 'react';
import './App.css';

import { subscribe, board } from './api'

const App = () => {
  const [time, setTime] = useState('timeStamp')
  useEffect(()=>{
    subscribe((err, timeStamp)=>setTime(timeStamp))
    board((err, board)=> console.log(board))
  },[])

  return (
  <main>
    <p>{time}</p>
  </main>
)}

export default App;
