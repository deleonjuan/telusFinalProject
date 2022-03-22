import React from "react";

const StylizedButton = ({ label = "", onPress }) => {

  return (
    <div id="StylizedButton" onClick={onPress}>
      <span>{label}</span>
    </div>
  );
};

export default StylizedButton;
