import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
import PlayerWaiting from "./pages/PlayerWaiting";
import Home from "./pages/homePage/Home";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import ResponseTrackerPage from "./pages/hostSide/responseTracker/ResponseTrackerPage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "20px",
            boxShadow: "2px 2px 12px 12px rgba(0,0,0,0.2)",
          }}
        >
          <Link to="/">home page</Link>
          <Link to="gamePin">Game pin page</Link>
          <Link to="nickname">Nickname page</Link>
          <Link to="playerWaiting">Player waiting page</Link>
          <Link to="questions">Question Page</Link>
          <Link to="responses">Response Tracker</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamePin" element={<GamePinPage />} />
          <Route path="/nickName" element={<NicknamePage />} />
          <Route path="/playerWaiting" element={<PlayerWaiting />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/responses" element={<ResponseTrackerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// git commit -am 'Conflicts resolved'
