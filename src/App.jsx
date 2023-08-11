import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
import HomePage from "./pages/homePage/Home"
import CustomInput from "./components/CustomInput/CustomInput";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamePin" element={<GamePinPage />} />
        <Route path="/nickName" element={<NicknamePage />} />
         </Routes>
    </Router>
  );
}

export default App;
