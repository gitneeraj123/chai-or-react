import { useEffect, useState } from 'react'
import { TodoProvider } from './context/index.js'
import {TodoForm,TodoItem} from "./component"
import './App.css' 

function App() {
  // jo todo apke paas ayenge use aap khi n khi store kronge
  const [todos,setTodos] = useState([])
   
  // defining the methods provided by TodoProvider 
  // ye ek individual todo he baki jo provider provide kr rha he vo sare todos he  
  const addTodo = (todo)=>{
    // hme isko todos me add krna he 
    //  setTodos(todo) it will delete all previous todo and add this 
    // to hme previous todo ki value chahiye 
    // destructuring concept : taking previous value and spread in new arra [...prev] aur todo ko bhi add kr do 
    // but direct me todo add nhi kr skta kyuki hmne usme id, completed define nhi kiya  
    setTodos((prev)=> [{id: Date.now(),...todo},...prev])
  }
  
  const updateTodo = (id,todo )=>{
      // iske liye hme ek loop lgana pdega hme kisko update krna he 
      // hmne setTodo call kiye vha se prev todo uthaye un pr loop lgaya ab hr ek todo ko check kiye yhi id match hoti he to nya todo daal do aur nhi to prevTodo rhne do  
      // prevTodo : ye hr ek todo he prev ke undr   
      setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id===id? todo: prevTodo)))
  }

  const deleteTodo = (id)=>{
    // javascript me ek function he filter ke liye us todo ko filter kr jiski id , given id nhi he  
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
    // setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id===id? {}: prevTodo)))
  } 

  const toggleComplete = (id)=>{
    // hmne loop lgaya id find ki ydi id match hoti he to (todo ek object he ) usko spread kiya fir , completed ko overwrite kr diya 
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id===id ? { 
      ...prevTodo , completed : !prevTodo.completed} : prevTodo))
  }


  // local store ke liye 
  // Load todos from local storage on component mount
  useEffect(() => {
    // jb tk hm react me he hm direct local storage ko call kr skte ho next js me nhi (server side rendering)
    // local storage me values string me store hoti he 
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(todos);
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);


  return (
    // TodoProvider : sari values provide krega jo  TodoContext.js me he 
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] mi n-h-screen py-8"> 
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id} className='w-full'> 
                                <TodoItem todo = {todo}/>
                          </div>
                        ))}
                    </div>
                </div>
      </div>
    </TodoProvider>
  )
}

export default App
