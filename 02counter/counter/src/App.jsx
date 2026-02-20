import {useState,useEffect} from 'react'
import './App.css'


function App() {

  let [counter,setCounter] = useState(5);

  const addValue = ()=>{
      ++counter;
      if(counter<=20) setCounter(counter);
  }

  const removeValue = ()=>{
    --counter;
    if(counter>=0) setCounter(counter);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2 id='add' >Counter Value:{counter}</h2>
      <button onClick={addValue} >Add Value: {counter}</button> <br />
      <button onClick={removeValue} >Decrease Value: {counter}</button> <br />
    </>
  )
}
export default App
