import React from "react";
import style from "./responseTracker.module.css";
import CustomButton from "../../../components/CustomButton";
import options from "../../QuestionPage/options";
import BarChart from "./BarChart";

const ResponseTrackerPage = () => {
  const data = [
    { label: "A -", point: 0, color: "hsla(255, 64%, 66%, 1)" },
    { label: "B -", point: 0, color: "hsla(191, 95%, 46%, 1)" },
    { label: "C -", point: 0, color: "hsla(47, 79%, 52%, 1)" },
    { label: "D -", point: 9, color: "hsla(302, 94%, 51%, 1)" },
  ];

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
    <div className={style.pageBody}>
      <div className={style.questions}>
        <p className={style.questionBox}>
          What is the full name of your instructor?
        </p>
        <CustomButton buttonText={"Next"} containerStyle={style.next} />
      </div>
      <BarChart data={data} />
      <div className={style.optionDiv}>{options.map(optionMap)}</div>
    </div>
  );
};

export default ResponseTrackerPage;
