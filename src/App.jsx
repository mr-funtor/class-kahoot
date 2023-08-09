import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import GamePinPage from './pages/GamePage/GamePinPage'
import NicknamePage from './pages/Nickname/NicknamePage'
import WelcomePage from './pages/WelcomePage/WelcomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gamePin" element={<GamePinPage />} />
        <Route path="/nickName" element={<NicknamePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
