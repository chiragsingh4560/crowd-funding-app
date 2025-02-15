import React, { useState } from "react";
import FundingCard from "./FundingCard";

const CrowdFundingApp = () => {
  const goalArr = [1000, 500, 2000, 1500];
  const [amtRaised, SetAmtRaised] = useState(new Array(goalArr.length).fill(0));
  const [inputVal, SetAmtVal] = useState(new Array(goalArr.length).fill(""));
  const handleChange = (e, projectNo) => {
    console.log(
      `input changed on project ${projectNo} input is: ${e.target.value}`
    );
  };
  const handleSubmit = (e, projectNo) => {
    e.preventDefault();
    console.log(`submit clicked on project ${projectNo}`);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {goalArr.map((goalAmt, index) => {
        return (
          <FundingCard
            key={index}
            projectGoal={goalAmt}
            projectNo={index + 1}
            amountRaised={amtRaised[index]}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputVal={inputVal[index]}
          />
        );
      })}
    </div>
  );
};

export default CrowdFundingApp;
