import { useState } from "react";

//assets
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";

const ImageData = () => {
  const { avatars, setSelectedImage } = useContext(ModalContext);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image.imageSource);
  };
  const handleImageSelection = (index) => {
    setSelectedImageIndex(index);
    handleImageClick(avatars[index]);
  };

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
          <div
            key={index}
            // onClick={() => handleImageClick(image)}
            style={{
              width: "80px",
              borderRadius: "100%",
              border: selectedImageIndex === index ? "2px solid blue" : "none",
            }}
          >
            <img
              style={{
                width: "80px",
                borderRadius: "100%",
                border:
                  selectedImageIndex === index ? "2px solid blue" : "none",
              }}
              src={image.imageSource}
              alt={`Image ${index}`}
              onClick={() => handleImageSelection(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageData;
