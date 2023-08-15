import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
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
      <div className={ styles.parent }>
        <div className={ styles.home }>
          <h1 className={ styles.head }>Welcome To Clahoot!</h1>
          <div className={ styles.cardDiv }>
            { cardItems.map((cards, index) => {
              return (
                <Link key={ index } to={ cards.linkto } className={ styles.theCards }>
                  <div className={ styles.theCards }  { ...cards }>
                    <div className={ styles.iconDiv }>
                      <div className={ styles.circle }> </div>
                    </div>
                    <div className={ styles.imageDiv }>
                      <img src={ cards.image } alt="" />
                    </div>
                    <div className={ styles.user }>
                      <p>{ cards.user }</p>
                    </div>
                    <div className={ styles.cardBottom }>
                      <p>{ cards.text }</p>
                    </div>
                  </div>
                  <div />
                </Link>
              );
            }) }
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
