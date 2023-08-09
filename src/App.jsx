import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
import CustomInput from "./components/CustomInput/CustomInput";

function App() {
  return (
    <Router>
      <Link to="gamePin">Game pin page</Link>
      <Link to="nickname">Nickname page</Link>
      <Routes>
        <Route path="/gamePin" element={<GamePinPage />} />
        <Route path="/nickName" element={<NicknamePage />} />
      </Routes>
    </Router>
  );
}

export default App;

// git commit -am 'Conflicts resolved'
