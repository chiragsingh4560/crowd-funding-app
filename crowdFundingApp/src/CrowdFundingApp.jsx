import React, { useEffect, useState } from "react";
import FundingCard from "./FundingCard";

const CrowdFundingApp = () => {
  const goalArr = [1000, 500, 2000, 1500];
  const [amtRaised, SetAmtRaised] = useState(new Array(goalArr.length).fill(0));
  const [inputVal, SetInputVal] = useState(new Array(goalArr.length).fill(""));

  const handleChange = (e, projectNo) => {
    SetInputVal((prev) => {
      const updatedInputs = [...prev];
      updatedInputs[projectNo - 1] = e.target.value;
      return updatedInputs;
    });
  };

  const clearInputs = () => {
    SetInputVal(new Array(goalArr.length).fill(""));
  };

  const handleSubmit = (e, projectNo) => {
    e.preventDefault();
    const amtNeeded = goalArr[projectNo - 1] - amtRaised[projectNo - 1];
    const enteredAmount = Number(inputVal[projectNo - 1]);
    if (enteredAmount > amtNeeded) {
      alert(`Amount exceeds needed funds! You only need ₹${amtNeeded}.`);
      return;
    } else {
      SetAmtRaised((prev) => {
        const updatedRaised = [...prev];
        updatedRaised[projectNo - 1] = enteredAmount + amtRaised[projectNo - 1];
        return updatedRaised;
      });
    }
    clearInputs();
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
