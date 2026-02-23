import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='min-h-screen w-full duration-200 justify-center' style={{backgroundColor:color}}>
       <div className='flex flex-wrap gap-1 justify-center bg-white rounded-3xl p-3'>
        <button onClick={()=>setColor("red")} className='bg-red-800 rounded-2xl text-white p-1 hover:'>Red</button>
        <button onClick={()=>setColor("green")} className='bg-green-800 rounded-2xl text-white p-1'>Green</button>
        <button onClick={()=>setColor("blue")} className='bg-blue-800 rounded-2xl text-white p-1'>Blue</button>
        <button onClick={()=>setColor("olive")} className='bg-olive-800 rounded-2xl text-white p-1'>Olive</button>
        <button onClick={()=>setColor("gray")} className='bg-gray-800 rounded-2xl text-white p-1'>Gray</button>
        <button onClick={()=>setColor("red")} className='bg-yellow-800 rounded-2xl text-white p-1' >Yellow</button>
        <button onClick={()=>setColor("pink")} className='bg-pink-800 rounded-2xl text-white p-1' >Pink</button>
        <button onClick={()=>setColor("purple")} className='bg-purple-800 rounded-2xl text-white p-1'>Purple</button>
        <button onClick={()=>setColor("lime")} className='bg-lime-800 rounded-2xl text-white p-1' >Lime</button>
        <button onClick={()=>setColor("white")} className='bg-slate-100 border border-gray-300 rounded-2xl text-black p-1' >White</button>
        <button onClick={()=>setColor("black")} className='bg-black rounded-2xl text-white p-1' >Black</button>
        </div>
    </div>
  )
}

export default App
