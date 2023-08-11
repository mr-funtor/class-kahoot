// components

//assets
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

const ImageData = () => {

  const { avatars, handleImageClick } = useContext(ModalContext);


  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1em",
        }}
      >
        {avatars.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "80px" }}
              src={image.imageSource}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageData;
