import React from 'react'
import style from "./CustomInput.module.css"

const CustomInput = (placeholder, text, value,onClick,style) => {
  return (
    <div>
      <input type={text} placeholder={placeholder} onClick={onClick} value ={value} className={style.inputContainer}/>
    </div>
  )
}

export default CustomInput
