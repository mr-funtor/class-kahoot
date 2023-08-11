import { useContext, useEffect } from "react";
//context

import { ModalContext } from "../../context/ModalContext";

const Images = () => {
  //context props
  const { selectedImage, defaultImage, setDefaultImage } =
    useContext(ModalContext);

  useEffect(() => {
    //
    setDefaultImage(selectedImage);
  }, [selectedImage]);

  return (
    <div>
      {defaultImage ? (
        <img
          style={{
            width: "150px",
          }}
          src={defaultImage}
          alt="default avatar"
        />
      ) : (
        "hello"
      )}
    </div>
  );
};

export default Images;
