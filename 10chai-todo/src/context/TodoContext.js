import { createContext , useContext } from "react";   

export const TodoContext = createContext({
    // by defualt values denge 
    todos : [
        // esi trike se hmare message add hote jayenge 
        {
            id: 1,
            todo : "Todo Message",
            completed: false
        } 
    ],
    // esme hm kuch function bhi paas kr rhe the pr uske undr functionality nhi likhi ja rhi thi  sirf ye bola jata he ki aap ek function ho 
    //  keval function ke name likhte he isko define kisi or file me krenge 
    addTodo: ()=>{
        // jb mere ko todo(message pass kro ge 
    },
    updateTodo: ()=>{
        // isme do chije pass krenge id(required for update),todo for update 
    },
    deleteTodo: ()=>{
        // sirf id
    },
    toggleComplete :()=>{
        // sirf id
    }   

})

// jb bhi hm useContext lenge use hme  ek context dena pdega ki hm kis context ke bare me baat kr rhe he 
export const useTodo = ()=>{
    return useContext(TodoContext)
}  

// hm ek provider bhi export kr dete he kyuki main file me fir hme provider ka code likhna pdega 
export const TodoProvider = TodoContext.Provider
