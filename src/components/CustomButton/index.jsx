import styles from "./CustomButton.module.css";

//Example
{
  /* <CustomButton
      buttonText={"lala"}
      containerStyle={styles.container}
    /> */
}

const CustomButton = ({ onClick, containerStyle, buttonText, disabled }) => {
  return (
    <button
      className={ `${styles.btnBody} ${containerStyle && containerStyle}` }
      onClick={ onClick }
      disabled={ disabled }
    >
      { buttonText }
    </button >
  );
};

export default CustomButton;
