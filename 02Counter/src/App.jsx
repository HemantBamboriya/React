import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setcounter]=useState(0)
  
 //let counter =5
 const addValue=()=>{
  if(counter < 20){
      setcounter(counter+1)
  }else{
         return counter;
  }
 
  
  // console.log("value added",Math.random());
 }

 const removeValue=()=>{
  if(counter > 0){
setcounter(counter-1);
  }else{
    return counter;
  }
  
 }

  return (
    <>
     <h1>The legend Hitesh Choudhary </h1>
     <h2>counter value:{counter}</h2>

     <button
     onClick={addValue}>Add value :{counter}</button>
     
    <br />
    <hr/>
    <button
    onClick={removeValue}>remove value : {counter}</button>
    </>
  )
}

export default App
