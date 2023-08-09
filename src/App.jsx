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
import WelcomePage from "./pages/WelcomePage/Welcomepage";
>>>>>>> 3724bfa7ec030e2dc1938d56541db8345c57ee89

function App() {
  return (
<<<<<<< HEAD

    <Router>

      <Routes>
        <Route path="/" element={<GamePinPage />} />
        <Route path="/" element={<NicknamePage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>


  )
=======
    <div>
      <Router>
        <Routes>
          <Route path="/gamePin" element={<GamePinPage />} />
          <Route path="/nickName" element={<NicknamePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
      <NicknamePage />
    </div>
  );
>>>>>>> 3724bfa7ec030e2dc1938d56541db8345c57ee89
}

export default App;
