import React from "react";
import style from "./hostLeader.module.css";

const HostLeaderBoard = () => {

  return (
    <div className={style.playerContainer}>
      
      
      {/* this is where the mapping starts i.e {data.map} */}
            <div className={style.playerDetails}>
              <div className={style.playerNameContain}>
                <img src="" alt="Avatar" className={style.avatar} />
                <p className={style.paragraph}>Name of Player</p>
              </div>
              <div>
                <p className={style.paragraph}>score i.e 90</p>
              </div>
            </div>
        {/* this is where the mapping stops  */}
        <div className={style.btnContainer}>
        <button className={style.playerBtn}>Next</button>
      </div>
    </div>
  );
};

export default HostLeaderBoard;
