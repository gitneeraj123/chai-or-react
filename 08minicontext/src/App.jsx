import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'

function App() {
  return (
    <UserContextProvider >
      <h1>React with chai aur code</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
