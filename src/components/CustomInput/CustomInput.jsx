import React from 'react'
import style from "./CustomInput.module.css"

const CustomInput = ({placeholder, text, value,onClick,customStyle}) => {
  return (
    <div>
      <input type={text} 
      placeholder={placeholder} 
      onClick={onClick} 
      value ={value} 
      className={`${style.inputContainer} ${customStyle && customStyle}`}/>
    </div>
  );
};

export default CustomInput;
