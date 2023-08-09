import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComponent from './components/InputComponent'
import GamePinPage from './pages/GamePage/GamePinPage'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Pages

function App() {

  return (
    <Router>
      <Routes>
        <Route path ="/" element ={<InputComponent/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
