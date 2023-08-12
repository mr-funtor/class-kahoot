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
    <div>
      <img
        style={{
          width: "150px",
        }}
        src={defaultImage}
        alt="default avatar"
      />
    </div>
  );
};

export default DefaultImage;
