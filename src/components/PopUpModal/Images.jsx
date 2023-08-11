import { useContext, useEffect } from "react";
//context

import { ModalContext } from "../../context/ModalContext";

const Images = () => {
  //context props
  const { selectedImage, defaultImage, setDefaultImage } =
    useContext(ModalContext);

  // changing the default image to the selected image
  useEffect(() => {
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

export default Images;
