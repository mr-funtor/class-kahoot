import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";
import PlayerWaiting from "./pages/PlayerWaiting";
import Home from "./pages/homePage/Home";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import HostWaiting from "./pages/hostSide/HostWaiting";
import ResponseTrackerPage from "./pages/hostSide/responseTracker/ResponseTrackerPage";
import HostLeaderBoard from "./pages/hostSide/HostLeaderBoard/HostLeaderBoard";
import ResultPage from "./pages/hostSide/resultPage/resultPage";
import WaitingRoom from "./pages/waitingRoom/WaitingRoom";
import FinalLeaderboard from "./pages/FinalLeaderboard";

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
            fontSize: "1.5rem",
            padding: "10px",
            boxShadow: "2px 2px 12px 12px rgba(0,0,0,0.2)",
          }}
        >
          <Link to="/">home</Link>
          <Link to="gamePin">GamePin</Link>
          <Link to="nickname">Nickname</Link>
          <Link to="playerWaiting">PlayerWaiting</Link>
          <Link to="questions">Question</Link>
          <Link to="hostwaiting">HostWaiting</Link>
          <Link to="responses">Responses</Link>
          <Link to="result">Result</Link>
          <Link to="FinalLeaderboard">Final Leaderboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamePin" element={<GamePinPage />} />
          <Route path="/nickName" element={<NicknamePage />} />
          <Route path="/playerWaiting" element={<PlayerWaiting />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/responses" element={<ResponseTrackerPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/hostwaiting" element={<HostWaiting />} />
          <Route path="/leaderBoard" element={<HostLeaderBoard />} />
          <Route path="/waitingRoom" element={<WaitingRoom />} />
          <Route path="/FinalLeaderboard" element={<FinalLeaderboard />} />
          {/* Note: the route is just to see how to navigate to the leaderBoard page, is not necessarily where is meant to be */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// git commit -am 'Conflicts resolved'
