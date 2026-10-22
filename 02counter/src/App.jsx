import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let counter = 10
  
  const addValue = () => {
    counter = counter + 1 
    console.log("Value Added : " + counter);
       
  }

  return (
    <>
      <h1>Counter page</h1>
      <h2>Counter value : {counter}</h2>
      <br />

      <button onClick={addValue} >Add value</button>
      <br />
      <button>Remove value</button>


    </>
  )
}

export default App
