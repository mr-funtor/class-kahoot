import React from "react";
import styles from "./CustomInput.module.css";

const CustomInput = ({placeholder, text, value,onClick,customStyle}) => {
  return (
    <div>
      <input type={text} 
      placeholder={placeholder} 
      onClick={onClick} 
      value ={value} 
      className={`${styles.inputContainer} ${customStyle && customStyle}`}/>
    </div>
  );
};

export default CustomInput;
