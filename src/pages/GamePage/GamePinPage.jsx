import { useState } from "react";

import React from "react";

import style from "./gamePin.module.css";

import CustomButton from "../../components/CustomButton";

import CustomInput from "../../components/CustomInput/CustomInput";

const GamePinPage = () => {
  return (
    <div className={style.header}>
      <h1 className={style.kahoot}>Clahoot!</h1>

      <div className={style.box}>
        <CustomInput
          placeholder={"Game Pin"}
          customStyle={style.inputContainer}
        />

        <CustomButton
          buttonText={"Activate"}
          containerStyle={style.btnKahoot}
        />
      </div>
    </div>
  );
};

export default GamePinPage;
