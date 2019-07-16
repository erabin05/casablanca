import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import subscribe from './api'

const App = () => {
  const [time, setTime] = useState('timeStamp')
  useEffect(()=>{
    subscribe((err, timeStamp)=>setTime(timeStamp))
  },[])

  return (
  <main>
    <p>{time}</p>
  </main>
)}

export default App;
