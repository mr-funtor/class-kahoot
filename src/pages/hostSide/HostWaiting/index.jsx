import { BiPlay } from 'react-icons/bi';
import { CustomButton, LoadingDots } from '../../../components';
import styles from './HostWaiting.module.css';


const HostWaiting = ({ gamePin, players = [] }) => {



    return (
        <div className={ styles.HostWaiting }>
            <h1>Get ready to play!</h1>
            <div className={ styles.gamePinBox }>
                <h3>Game Pin</h3>
                <p>{ gamePin ? gamePin
                    : <span
                        style={
                            { display: 'flex', gap: '5px', alignItems: 'center' }
                        }>
                        <LoadingDots />
                    </span> }
                </p>
            </div>
            <CustomButton
                containerStyle={ `${styles.startBtn}` }
                buttonText={ <>
                    <BiPlay className={ styles.playIcon } />
                    Start!
                </> }
                onClick={ () => { console.log("clicked!") } }
                disabled={ players.length < 2 }
            />
        </div>
    )
}
export default HostWaiting