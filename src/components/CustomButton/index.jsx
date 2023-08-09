import styles from "./CustomButton.module.css"

const CustomButton =({onClick,containerStyle,buttonText,type, textStyle})=>{
    return(
        <button
            className={`${styles.btnBody} ${containerStyle && containerStyle}`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}

export default CustomButton;