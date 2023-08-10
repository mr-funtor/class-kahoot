import LoadingSpinner from '../../components/LoadingSpinner'
import styles from './PlayerWaiting.module.css'
import userAvi from '../../assets/avatars/avatar1.svg'
import editIcon from '../../assets/icons/pen.svg';
import { useState } from 'react';

const PlayerWaiting = () => {
    const [playerName,] = useState('Janie123')

    return (
        <div className={ styles.PlayerWaiting }>
            <div className={ styles.PlayerWaitingContent }>
                <LoadingSpinner size={ '200px' }>
                    {
                        userAvi ?
                            <div className={ styles.userAviBox }>
                                <button
                                    className={ styles.chooseAvi }
                                    onClick={ () => {
                                        console.log('edit avatar', `Current Avi: ${userAvi}`)
                                    } }
                                >
                                    <img src={ editIcon } className={ styles.editIcon } alt="Select avatar" />
                                </button>
                                <img src={ userAvi } className={ styles.userAvi } alt='user avatar' />
                            </div>
                            :
                            <p className={ styles.wait }>Please wait...</p>
                    }
                </LoadingSpinner>

                <h2 className={ styles.playerNN }>{ playerName }</h2>
                <p className={ styles.desc }>Kindly wait for other players to join in!</p>
            </div>


        </div>
    )
}
export default PlayerWaiting