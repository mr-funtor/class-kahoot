import React from "react";
import style from "./responseTracker.module.css";
import CustomButton from "../../../components/CustomButton";
import options from "../../QuestionPage/options";

const ResponseTrackerPage = () => {
  function optionMap(item) {
    return (
      <CustomButton
        key={item.id}
        buttonText={item.value}
        containerStyle={`${style.default} ${item.backgroundColor}`}
      />
    );
  }
  return (
    <div className="pageBody">
      <div className={style.optionDiv}>{options.map(optionMap)}</div>
    </div>
  );
};

export default ResponseTrackerPage;
