import React from 'react'

import style from "./nickName.module.css"

import CustomButton from '../../components/CustomButton'

import CustomInput from '../../components/CustomInput/CustomInput'

 

const NicknamePage = ({ buttonText }) => {

 

  return (

 

    <div className={style.container}>

 

      <h1 className={style.head}>Clahoot!</h1>

 

      <div className={style.kahootDiv}>

 

        <CustomInput customStyle={style.inputPin} placeholder={"Nickname"}/>

        <CustomButton  containerStyle={style.btnPin} buttonText={"Play"}/>

 

      </div>

 

 

 

    </div>

 

 

 

  )

 

}

 

 

 

export default NicknamePage
