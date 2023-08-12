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
      <img
        style={ {
          width: "85%",
        } }
        src={ defaultImage }
        alt="default avatar"
      />
    </div>
  );
};

export default DefaultImage;
