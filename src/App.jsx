import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
<<<<<<<<< Temporary merge branch 1
=========
import CustomInput from "./components/CustomInput/CustomInput";
>>>>>>>>> Temporary merge branch 2

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamePin" element={<GamePinPage />} />
        <Route path="/nickName" element={<NicknamePage />} />
         </Routes>
    </Router>
=======
    <div className="App">
      <Router>
        <Link to="gamePin">Game pin page</Link>
        <Link to="nickname">Nickname page</Link>
        <Link to="playerWaiting">Player waiting page</Link>
        <Routes>
          <Route path="/gamePin" element={ <GamePinPage /> } />
          <Route path="/nickName" element={ <NicknamePage /> } />
          <Route path="/playerWaiting" element={ <PlayerWaiting /> } />
        </Routes>
      </Router>
    </div>
>>>>>>> 6a7f8d66bb5907d1a566f82d922babfb3eccc2fa
  );
}

export default App;

// git commit -am 'Conflicts resolved'
