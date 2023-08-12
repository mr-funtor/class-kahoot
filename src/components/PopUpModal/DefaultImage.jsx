import { useContext, useEffect } from "react";
//context

import { ModalContext } from "../../context/ModalContext";

const DefaultImage = () => {
  //context props
  const { selectedImage, defaultImage, setDefaultImage } =
    useContext(ModalContext);

  useEffect(() => {
    //
    setDefaultImage(selectedImage);
  }, [selectedImage]);

  return (
    <div style={ { display: 'grid', placeItems: 'center' } }>
      {
        defaultImage ?
          <img
            style={ {
              width: "85%",
            } }
            src={ defaultImage }
            alt="default avatar"
          />
          : <p style={ {
            fontSize: '10rem',
            borderRadius: '50%',
            width: "75%",
            height: '75%',
            background: 'gray',
            margin: '0',
            lineHeight: '0'
          } }>{ 'J' }</p> // replace 'J' with player Initials 
      }
    </div>
  );
};

export default DefaultImage;
