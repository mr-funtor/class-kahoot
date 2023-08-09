import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './components/InputComponent'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NicknamePage from './pages/Nickname/NicknamePage'

//Pages

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Router>
     
      <Routes>
       
        <Route path ="/" element ={<InputComponent/>}/>
      </Routes>
    </Router>
    <NicknamePage/>
    </div>
  )
}

export default App
