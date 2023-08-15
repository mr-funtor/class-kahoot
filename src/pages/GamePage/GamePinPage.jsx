import React from "react";
import style from "./gamePin.module.css";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

<<<<<<< HEAD
const GamePinPage = ({ buttonText }) => {
=======
const GamePinPage = () => {
>>>>>>> 8d55428 (updated repo)
  return (
    <div className={style.header}>
      <h1 className={style.kahoot}>Clahoot!</h1>
      <div className={style.box}>
<<<<<<< HEAD
        <CustomButton
          style={{ border: "10px solid red" }}
          buttonText={"Activate"}
        />
=======
        <CustomInput
        placeholder={"Game pin"} customStyle={style.kahootInput}
        
        />
        <CustomButton  buttonText={'Activate'} containerStyle={style.kahootBtn}
        
        />
        
>>>>>>> 8d55428 (updated repo)
      </div>
    </div>
  );
};

export default GamePinPage;
