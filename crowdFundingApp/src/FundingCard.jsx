import React from "react";

const FundingCard = ({
  projectNo = 1,
  projectGoal = 100,
  amountRaised = 5,
  handleSubmit,
  handleChange,
  inputVal,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        backgroundColor: "lightgray",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        outline: "3px solid blue",
      }}
    >
      <h3>{`Project ${projectNo}`}</h3>
      <h4>{`Project Goal ${projectGoal}`}</h4>
      <h4>{`Amount Raised ${amountRaised}`}</h4>
      <form onSubmit={(e) => handleSubmit(e, projectNo)}>
        <input
          type="text"
          placeholder="Enter Amount Here"
          onChange={(e) => handleChange(e, projectNo)}
          value={inputVal}
        />
        <button type="submit">Donate</button>
      </form>
      <h4>{`Remaining Amount Needed ${projectGoal - amountRaised}`}</h4>
    </div>
  );
};

export default FundingCard;
