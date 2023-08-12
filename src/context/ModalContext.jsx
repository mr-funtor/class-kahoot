import { createContext, useState, useEffect } from "react";

//avatars
import {
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16,
} from "../assets";

// array holding the images
const avatars = [
  {
    imageSource: img1,
    isSelected: false,
  },
  {
    imageSource: img2,
    isSelected: false,
  },
  {
    imageSource: img3,
    isSelected: false,
  },
  {
    imageSource: img4,
    isSelected: false,
  },
  {
    imageSource: img5,
    isSelected: false,
  },
  {
    imageSource: img6,
    isSelected: false,
  },
  {
    imageSource: img7,
    isSelected: false,
  },
  {
    imageSource: img8,
    isSelected: false,
  },
  {
    imageSource: img9,
    isSelected: false,
  },
  {
    imageSource: img10,
    isSelected: false,
  },
  {
    imageSource: img11,
    isSelected: false,
  },
  {
    imageSource: img12,
    isSelected: false,
  },
  {
    imageSource: img13,
    isSelected: false,
  },
  {
    imageSource: img14,
    isSelected: false,
  },
  {
    imageSource: img15,
    isSelected: false,
  },
  {
    imageSource: img16,
    isSelected: false,
  },
];

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [defaultImage, setDefaultImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);


  // sets default image to random image every time the page loads
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    setDefaultImage(avatars[randomIndex].imageSource);
  }, []);


  // sets default image to selected image
  const handleImageClick = (image) => {
    setSelectedImage(image.imageSource);
  };
  const handleImageSelection = (index) => {
    setSelectedImageIndex(index);
    handleImageClick(avatars[index]);
  };


  const passedObjects = {
    defaultImage,
    setDefaultImage,
    avatars,
    selectedImage,
    setSelectedImage,
    selectedImageIndex,
    handleImageSelection,
  };

  return (
    <ModalContext.Provider value={ passedObjects }>
      { children }
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
