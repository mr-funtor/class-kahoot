import React from "react";
import style from "./gamePin.module.css";
import CustomButton from "../../components/CustomButton";

const GamePinPage = ({ buttonText }) => {
  return (
    <div>
      <h1 className={style.kahoot}>Clahoot!</h1>
      <div className={style.box}>
        <CustomButton
          style={{ border: "10px solid red" }}
          buttonText={"Activate"}
        />
      </div>
    </div>
  );
};

export default GamePinPage;
