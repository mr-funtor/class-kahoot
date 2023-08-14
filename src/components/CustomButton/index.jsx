import styles from "./CustomButton.module.css";

//Example
{
  /* <CustomButton
      buttonText={"lala"}
      containerStyle={styles.container}
    /> */
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
