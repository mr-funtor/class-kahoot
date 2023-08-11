import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ children, size = '200px' }) => {

    const spinnerSize = { width: size, height: size }


    return (
        <div style={ spinnerSize } className={ styles.spinner }>
            <div className={ styles.children }>
                { children }
            </div>
            <div className={ `${styles.spinnerSection} ${styles.spinnerSection1}` }></div>
            <div className={ `${styles.spinnerSection} ${styles.spinnerSection2}` }></div>
            <div className={ `${styles.spinnerSection} ${styles.spinnerSection3}` }></div>
            <div className={ `${styles.spinnerSection} ${styles.spinnerSection4}` }></div>
        </div>
    )
}
export default LoadingSpinner