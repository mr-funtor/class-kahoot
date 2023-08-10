import React, { useState, useEffect } from "react";
import "../App.css";
import "./timer.css";
import "./questionBox.css";
import "./answerOptions.css";
import { CustomButton } from "../components";
// import options from "./options";

const QuestionPage = () => {
  const [progress, setProgress] = useState(0);
  // const [question, setQuestion] = useState("");

  //Creating the Timer function
  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [progress]);

  //Changing the color according to time left
  const getProgressBarColor = (progress) => {
    if (progress < 50) {
      return "green";
    } else if (progress < 90) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="App">
      <div className="timerContainer">
        <p className="questionNum">Question 1</p>
        <div className="progressBar">
          <div
            className={`progress ${getProgressBarColor(progress)}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div
        className="questionBox"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.3rem" }}>
          What is the full name of your instructor?
        </p>
      </div>

      <div className="answerOptions">
        <h1>Testing</h1>
      </div>
    </div>
  );
};

export default QuestionPage;
