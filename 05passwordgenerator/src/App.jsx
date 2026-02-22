import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'
function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setcharAllowed] = useState(false);
  let [password,setPassword] = useState('');

  //useRef to store the previous values of length, numberAllowed and charAllowed, so that we can compare them with the current values and only call passwordGenerator when they change
  let passRef = useRef(null);

  //using callback to memoize the passwordGenerator function, so that it only re-renders when length, numberAllowed or charAllowed changes
  let passwordGenerator = useCallback(()=>{
    let pass= '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let num = '0123456789';
    let char = '!@#$%^&*()_+';
    if(numberAllowed){
      str+=num;
    }
    if(charAllowed){
      str+=char;
    }
    for(let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random()*str.length)
      pass += str[randomIndex]
    }
    setPassword(pass)
  },[length,numberAllowed, charAllowed,setPassword])


  //function to copy the password to clipboard
  let copyPasswordtoClipboard = useCallback(()=>{
      passRef.current.select();
      window.navigator.clipboard.writeText(password)
  },[password])


  // use of useEffect to call passwordGenerator whenever length, numberAllowed or charAllowed changes
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed, charAllowed,passwordGenerator]) 

  //return the jsx code for the password generator app
  return (
    <>  
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-100 bg-gray-700'>
        {/* this is taking input */}
        <h1 className='text-white text-2xl text-center'>Password Generator</h1>
        <div className='flex  shadow  overflow-hidden mb-4'>
          <input type="text" 
            value={password}
            className='w-full text-gray-600 bg-white rounded-3xl p-2 m-2 focus:outline-none'
            placeholder='Your Password'
            readOnly
            ref={passRef}
           />
          <button className='bg-blue-700 px-2 py-2 rounded-2xl m-2 outline-none shrink-0 cursor-pointer'
            onClick={copyPasswordtoClipboard}
          >Copy</button>
        </div>

        
        <div className='flex text-sm gapx-2 p-3 text-orange-500'>
              {/* range input */}
              <div className='flex items-center gap-x-1'>
                <input type="range"
                    min={6}
                    max={100}
                    value={length}
                    className='w-full accent-blue-700 cursor-pointer'
                    onChange={(e)=>setLength(e.target.value)}
                />
                <label>Length:{length}</label>
              </div>

              {/* number checkbox */}
              <div className='flex items-center gap-x-1 mx-3'>
                <input type="checkbox"
                    checked = {numberAllowed}
                    id = "numberInput"
                    onChange={()=>setNumberAllowed((prev)=>!prev)}
                />
                 <label>Numbers</label>
              </div>

               {/* character checkbox */}
               <div className='flex items-center gap-x-1 mx-2'>
                <input type="checkbox"
                    checked = {charAllowed}
                    id = "charInput"
                    onChange={()=>setcharAllowed((prev)=>!prev)}
                />
                 <label> Characters </label>
              </div>
        </div>
      </div>
    </>
  )
}

export default App
