import {useState} from 'react'
import './App.css'


function App() {
  let [counter,setCounter] = useState(5);

  const addValue = ()=>{
      ++counter;
      if(counter<=20) setCounter(counter);
      if(counter<=20) setCounter(counter);
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


  //Diffing algorithm for list rendering using unique keys ;
  // const fruits = [
  //   { id: 101, name: "Apple", price: "$2", color: "Red" },
  //   { id: 102, name: "Banana", price: "$1", color: "Yellow" },
  //   { id: 103, name: "Grape", price: "$4", color: "Purple" }
  // ];
  // function App() {
  //   // A simple function to handle the button click
  //   const buyFruit = (name) => {
  //     alert(`You added ${name} to your cart!`);
  //   };
  //   return (
  //       <div>
  //         <h1>Fruit Store</h1>
  //         {fruits.map((fruit)=>(
  //           <div key={fruit.id} style={{backgroundColor: }} >
  //               <p>{fruit.name}</p>
  //               <p>{fruit.price}</p>
  //               <p style={{color: fruit.color.toLower}} >fruit.color</p>
  //               <button onClick={()=>buyFruit(fruit.name)}>Buy {fruit.name}</button>
  //           </div>
  //         ))}
  //       </div>
  //   )}


  export default App
