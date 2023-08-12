import { Link } from "react-router-dom";

import style from "./Homepage.module.css";
import logo from "../../assets/Ellipse 12.svg";
import icon from "../../assets/Group 27.svg";
import iconTwo from "../../assets/Group 27 (1).svg";

const Home = () => {
  let cardItems = [
    {
      icon: logo,
      image: icon,
      user: "Host",
      text: "Create a room",
      buttonLink: "/",
    },
    {
      icon: logo,
      image: iconTwo,
      user: "Join",
      text: "Join a room",
      buttonLink: "/gamePin",
    },
  ];

  return (
    <>
      <div className={style.App}>
        <h1>Welcome To Clahoot</h1>
        <div className={style.cardDiv}>
          {cardItems.map((cards, index) => {
            return (
              <div className={style.theCards} key={index} {...cards}>
                {/* <div className={style.iconDiv}><img src={cards.icon} alt="" /></div> */}
                <div className={style.iconDiv}>
                  {" "}
                  <div className={style.circle}> </div>
                </div>
                <div className={style.imageDiv}>
                  <img src={cards.image} alt="" />
                </div>
                <div className={style.user}>{cards.user}</div>
                <div className={style.link}>
                  <Link to={cards.buttonLink}>{cards.text}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
