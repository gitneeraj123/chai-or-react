import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return( 
//     <div>  
//       <h1>this is my first react project | </h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com">visit here</a>
// )

const anotherUser = "Chai aur client"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'visit here',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp/>
  //you can also be use StrictMode here but it will render the component twice in development mode to help identify potential problems in an application. It does not affect the production build.
  // App() //it is not a way.
<div>
    reactElement
    <App/>
</div>
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
