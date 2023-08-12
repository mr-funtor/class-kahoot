import styles from "./PopUpModal.module.css";
import { RiCloseLine } from "react-icons/ri";

import ImageData from "./ImageData";

const PopUpModal = ({ setIsOpen }) => {
  return (
    <>
      <div className={ styles.darkBg } onClick={ () => setIsOpen(false) } />
      <div className={ styles.centered }>
        <div className={ styles.modal }>
          <div className={ styles.modalHeader }>
            <h5 className={ styles.heading }>Select an avatar</h5>
          </div>

          {/* the X icon on the opened modal. It closes the modal */ }
          <button className={ styles.closeBtn } onClick={ () => setIsOpen(false) }>
            <RiCloseLine style={ { marginBottom: "-3px" } } />
          </button>
          <div className={ styles.modalContent }>
            <ImageData />
          </div>
          <div className={ styles.modalActions }>
            <button
              className={ styles.selectBtn }
              onClick={ () => setIsOpen(false) }
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;
