import { createContext, useState, useEffect } from "react";

//assets
import img1 from "../assets/avatars/angryBear.svg";
import img2 from "../assets/avatars/avatar-girl-svgrepo-com (1).svg";
import img3 from "../assets/avatars/tophat.svg";
import img4 from "../assets/avatars/sunglassesDarkHair.svg";
import img5 from "../assets/avatars/avatar-svgrepo-com (1).svg";
import img6 from "../assets/avatars/avatar-svgrepo-com.svg";
import img7 from "../assets/avatars/avocado.svg";
import img8 from "../assets/avatars/batman.svg";
import img9 from "../assets/avatars/blackCat.svg";
import img10 from "../assets/avatars/brownPanda.svg";
import img11 from "../assets/avatars/einsteinTongue.svg";
import img12 from "../assets/avatars/fox.svg";
import img13 from "../assets/avatars/geisha.svg";
import img14 from "../assets/avatars/glassesGranny.svg";
import img15 from "../assets/avatars/glassesMouth.svg";
import img16 from "../assets/avatars/hijab.svg";
// import img17 from "../assets/avatars/lion.svg";
// import img18 from "../assets/avatars/weirdo.svg";
// import img19 from "../assets/avatars/robotAang.svg";
// import img20 from "../assets/avatars/sheik.svg";
import userAvi from "../assets/avatars/avatar1.svg";

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
  // {
  //   imageSource: img17,
  //   isSelected: false,
  // },
  // {
  //   imageSource: img18,
  //   isSelected: false,
  // },
  // {
  //   imageSource: img19,
  //   isSelected: false,
  // },
  // {
  //   imageSource: img20,
  //   isSelected: false,
  // },
];

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [defaultImage, setDefaultImage] = useState(userAvi);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    setDefaultImage(avatars[randomIndex].imageSource);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image.imageSource);
  };

  const passedObjects = {
    defaultImage,
    setDefaultImage,
    avatars,
    selectedImage,
    handleImageClick,
  };

  return (
    <ModalContext.Provider value={passedObjects}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
