import styles from "./CustomButton.module.css";

//Example
{
  /* <CustomButton
      buttonText={"lala"}
      containerStyle={styles.container}
<<<<<<< HEAD
    /> */
=======
    /> */}



const CustomButton = ({ onClick, containerStyle, buttonText, type, textStyle, }) => {
    return (
        <button
            className={`${styles.btnBody} ${containerStyle && containerStyle}`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
>>>>>>> 0d45f9f (changes in gamepin)
}

const CustomButton = ({ onClick, containerStyle, buttonText }) => {
  return (
    <button
      className={`${styles.btnBody} ${containerStyle && containerStyle}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
