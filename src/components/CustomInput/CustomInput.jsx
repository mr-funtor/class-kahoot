import React from 'react'
import styles from "./CustomInput.module.css"

const CustomInput = ({placeholder, text, value,onClick,style, customStyle}) => {
  return (
    <div>
      <input type={text} 
      placeholder={placeholder} 
      onClick={onClick} 
      value ={value} 
      className={`${styles.inputContainer} ${styles.customStyle && customStyle}`}/>
    </div>
  ) 
}

export default CustomInput
