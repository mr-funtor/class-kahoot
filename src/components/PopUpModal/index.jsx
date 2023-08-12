import styles from "./PopUpModal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

//assets
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

const PopUpModal = ({ setIsOpen }) => {
  // imports from modal context
  const { avatars, selectedImageIndex, handleImageSelection } = useContext(ModalContext);


  return (
    <>
      <div className={ styles.darkBg } onClick={ () => setIsOpen(false) } />
      <div className={ styles.centered }>
        <div className={ styles.modal }>
          <div className={ styles.modalHeader }>
            <h5 className={ styles.heading }>Select an avatar</h5>
          </div>

          {/* // modal and it's contents */ }

          {/* the X icon on the opened modal. It closes the modal */ }
          <button className={ styles.closeBtn } onClick={ () => setIsOpen(false) }>
            <RiCloseLine style={ { marginBottom: "-3px" } } />
          </button>
          {/* display images */ }
          <div className={ styles.modalContent }>
            <div style={ { display: "flex" } }>
              <div
                style={ {
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1em",
                } }
              >
                { avatars.map((image, index) => (
                  <div
                    key={ index }
                    style={ {
                      width: "80px",
                      borderRadius: "100%",
                    } }
                  >
                    <img
                      style={ {
                        width: "80px",
                        borderRadius: "100%",
                        border:
                          selectedImageIndex === index
                            ? "3px solid #0e0132"
                            : "none",
                      } }
                      src={ image.imageSource }
                      alt={ `Image ${index}` }
                      onClick={ () => handleImageSelection(index) }
                    />
                  </div>
                )) }
              </div>
            </div>
          </div>
          {/* select button */ }
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
