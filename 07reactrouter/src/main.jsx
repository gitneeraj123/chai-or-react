import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom";
import  Layout from "./layout.jsx";
import Home from "./components/Home/home.jsx";
import About from "./components/About/about.jsx";
import Contact from "./components/Contact/contact.jsx";
import User from "./components/User/user.jsx";
import Github,{GitInfoLoader} from "./components/Github/github.jsx";
//1st method to create router using array of objects
/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"", 
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])*/


//2nd method Alternative way to create router using JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/:userid" element={<User/>}/>
      {/* <Route path="/github" element={<Github/>}/> */}
      <Route 
        loader = {GitInfoLoader}
        path = "/github"
        element = {<Github/>}
      />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
