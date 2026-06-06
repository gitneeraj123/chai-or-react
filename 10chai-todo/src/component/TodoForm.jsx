import { useState } from 'react'
import { useTodo } from '../context'
// addTodo he 
// sara context useTodo ke paas he use import krke direct koi bhi values mil jayegi koi prop drilling nhi krni 
function TodoForm() {
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodo()

    //  hme method bnana pdega kyuki udhr ek object pass kr rkha he 
    const add = (e)=>{
        e.preventDefault()
        if(!todo) return 
        // addTodo({id:Date.now(),todo:todo,completed:false})
        // hmne id vha pr de rkhi he ,  
        addTodo({todo,completed:false})
        // fir se field ko empty kr do  add krne ke baaad 
        setTodo("");
    }
  return (
    <form onSubmit={add}  className="flex">
        <input
            type="text"
            id="todo"
            name="todo"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value = {todo} 
            onChange={(e)=> setTodo(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
  )
}

export default TodoForm