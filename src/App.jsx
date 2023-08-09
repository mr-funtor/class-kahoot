import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Pages
import GamePinPage from './pages/GamePage/GamePinPage'
import NicknamePage from './pages/Nickname/NicknamePage'
import WelcomePage from './pages/WelcomePage/Welcomepage'

function App() {

  return (
    <div>
    <Router>
     
      <Routes>
<<<<<<< HEAD
       
        <Route path ="/" element ={<InputComponent/>}/>
=======
        <Route path ="/" element ={<GamePinPage/>}/>
        <Route path ="/" element ={<NicknamePage/>}/>
        <Route path ="/" element ={<WelcomePage/>}/>
>>>>>>> 81a540481cb4805d1b2e4ff2e75b372514951601
      </Routes>
    </Router>
    <NicknamePage/>
    </div>
  )
}

export default App
