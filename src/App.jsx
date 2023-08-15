import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
<<<<<<< HEAD
import PlayerWaiting from "./pages/PlayerWaiting";
import Home from "./pages/homePage/Home";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
=======
import CustomInput from "./components/CustomInput/CustomInput";
>>>>>>> e2f3e80 (changes made to gamePin)

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="gamePin">Game pin page</Link>
        <Link to="nickname">Nickname page</Link>
        <Link to="playerWaiting">Player waiting page</Link>
        <Link to="questions">Question Page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamePin" element={<GamePinPage />} />
          <Route path="/nickName" element={<NicknamePage />} />
          <Route path="/playerWaiting" element={<PlayerWaiting />} />
          <Route path="/questions" element={<QuestionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// git commit -am 'Conflicts resolved'
