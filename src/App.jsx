import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './components/InputComponent'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path ="/" element ={<InputComponent/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
