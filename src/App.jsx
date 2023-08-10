import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CustomButton } from "./components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import GamePinPage from "./pages/GamePage/GamePinPage";
import NicknamePage from "./pages/Nickname/NicknamePage";

function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}

export default App;
