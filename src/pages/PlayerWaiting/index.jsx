import LoadingSpinner from "../../components/LoadingSpinner";
import styles from "./PlayerWaiting.module.css";
import userAvi from "../../assets/avatars/avatar1.svg";
import { useState } from "react";
import PopUpModal from "../../components/PopUpModal";
import ModalContextProvider from "../../context/ModalContext";
import { BiSolidPencil } from "react-icons/bi";
import DefaultImage from "../../components/PopUpModal/DefaultImage";
import { LoadingDots } from "../../components";

const PlayerWaiting = () => {
  const [playerName] = useState("Janie123");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContextProvider>
      <div className={ styles.PlayerWaiting }>
        <div className={ styles.PlayerWaitingContent }>
          <LoadingSpinner size={ "200px" }>
            { userAvi ? (
              <div className={ styles.userAviBox }>
                <button
                  className={ styles.chooseAvi }
                  onClick={ () => {
                    setIsOpen(true);
                  } }
                >
                  <BiSolidPencil style={ { color: "#0e0132" } } />
                </button>
                <DefaultImage />
              </div>
            ) : (
              <p className={ styles.wait }>Please wait...</p>
            ) }
          </LoadingSpinner>

          <h2 className={ styles.playerNN }>{ playerName }</h2>

          { !isOpen && (
            <p className={ styles.desc }>
              Kindly wait for other players to join in
              <LoadingDots />
            </p>
          ) }
        </div>

        { isOpen && <PopUpModal setIsOpen={ setIsOpen } /> }
      </div>
    </ModalContextProvider>
  );
};
export default PlayerWaiting;
