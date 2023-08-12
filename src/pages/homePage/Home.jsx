import { Link } from "react-router-dom";
import style from "./Homepage.module.css";
import { logo, icon, iconTwo } from "../../assets";

const Home = () => {
  let cardItems = [
    {
      icon: logo,
      image: icon,
      user: "Host",
      text: "Create a room",
      linkto: "/createRoom",
    },
    {
      icon: logo,
      image: iconTwo,
      user: "Join",
      text: "Join a room",
      linkto: "/gamePin",
    },
  ];

  return (
    <>
      <div className={style.home}>
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
                  <Link to={cards.linkto}>{cards.text}</Link>
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
