import React from "react";
import style from "./resultPage.module.css";
import Check from "../../../assets/icons/check-mark-svgrepo-com.svg";
import Cancel from "../../../assets/icons/cancel-svgrepo-com.svg";

const resultPage = () => {
  let answer = false;
  return (
    <div className={style.pgBody}>
      <div
        className={`${
          answer ? style.outerCircleCorrect : style.outerCircleWrong
        }`}
      >
        <div
          className={` ${
            answer ? style.innerCircleCorrect : style.innerCircleWrong
          }`}
        >
          {answer ? (
            <img className={style.check} src={Check} />
          ) : (
            <img className={style.cancel} src={Cancel} />
          )}
        </div>
      </div>
      <p>{answer ? "Correct. You're a star!" : "Incorrect. Don't give up!"}</p>
    </div>
  );
};

export default resultPage;
