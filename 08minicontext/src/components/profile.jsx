import UserContext from "../context/UserContext";
import React,{useContext} from 'react'

export default function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return  <div>!Please login!</div> 
    return <div>Welcome {user ?.username || "Guest"}</div>
}