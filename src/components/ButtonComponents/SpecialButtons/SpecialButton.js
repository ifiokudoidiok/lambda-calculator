import React from "react";

const SpecialButton = (props) => {
  const {special} =props;
  return (
    <div className="special-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {special}
    </div>
  );
};
export default SpecialButton
