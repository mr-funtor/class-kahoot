import React from 'react'
import style from "./nickName.module.css"
import CustomButton from '../../components/CustomButton'


const NicknamePage = ({buttonText}) => {
  return (
    <div className={style.container}>
    <h1>Clahoot!</h1>
    <div className={style.kahootDiv}>
    
     
        <CustomButton />
      </div>
    
    </div>
    
  )
}

export default NicknamePage