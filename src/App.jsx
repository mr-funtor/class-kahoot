import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
<<<<<<< HEAD
import GamePinPage from './pages/GamePage/GamePinPage'
import NicknamePage from './pages/Nickname/NicknamePage'
import WelcomePage from './pages/WelcomePage/WelcomePage'
=======
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
import WelcomePage from "./pages/HomePage/HomePage";
import CustomInput from "./components/CustomInput/CustomInput";

>>>>>>> 611c0603e1871b10b8b5e92cf916c6b75955fc44

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/gamePin" element={<GamePinPage />} />
        <Route path="/nickName" element={<NicknamePage />} />
         </Routes>
    </Router>
   
  );
}

export default App;
