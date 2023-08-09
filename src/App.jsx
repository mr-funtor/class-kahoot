import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CustomButton } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";

//Pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
