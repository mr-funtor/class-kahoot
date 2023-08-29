import React, {useState} from 'react'
import { LoadingDots, LoadingSpinner } from '../../components'
import DefaultImage from '../../components/PopUpModal/DefaultImage'
import ModalContextProvider from '../../context/ModalContext'
import styles from '../PlayerWaiting/PlayerWaiting.module.css'
import userAvi from '../../assets/avatars/avatar1.svg'


export const WaitingRoom = () => {
    const [playerName, setPlayerName] = useState('username')
    return (
        <ModalContextProvider>
            <div className={styles.PlayerWaiting}>
                <div className={styles.PlayerWaitingContent}>
                    <LoadingSpinner size={"200px"}>
                        {userAvi ? (
                            <div className={styles.userAviBox}>
                                <DefaultImage />
                            </div>
                        ) : (
                            <p className={styles.wait}>Please wait...</p>
                        )}
                    </LoadingSpinner>

                    <p className={styles.playerNN}>{playerName}</p>

                        <p className={styles.desc}>
                            Kindly wait for others to submit their responses
                            <LoadingDots />
                        </p>
                </div>
            </div>
        </ModalContextProvider>

    )
}
export default WaitingRoom