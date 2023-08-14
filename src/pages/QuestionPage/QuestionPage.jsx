import React, { useState, useEffect } from "react";
import "../../App.css";
import "./timer.css";
import "./questionBox.css";
// import style from "./answerOptions.module.css";

const QuestionPage = () => {
  const [progress, setProgress] = useState(0);

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
    if (progress < 40) {
      return "green";
    } else if (progress < 70) {
      return "yellow";
    } else if (progress < 95) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="questionContainer">
      <div className="timerContainer">
        <p className="questionNum">Question 1</p>
        <div className="progressBar">
          <div
            className={`progress ${getProgressBarColor(progress)}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <section className="questionBox">
        <p className="question">What is the full name of your instructor?</p>
      </section>

      <div className="answerOptions">
        <h1>Testing</h1>
      </div>
    </div>
  );
};

export default QuestionPage;
