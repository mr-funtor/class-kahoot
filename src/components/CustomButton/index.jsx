import styles from "./CustomButton.module.css"



//Example
{/* <CustomButton
      buttonText={"lala"}
      containerStyle={styles.container}
    /> */}



const CustomButton = ({ onClick, containerStyle, buttonText, type, textStyle, style }) => {
    return (
        <button
        style={style}
            className={`${styles.btnBody} ${containerStyle && containerStyle}`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}

export default CustomButton;