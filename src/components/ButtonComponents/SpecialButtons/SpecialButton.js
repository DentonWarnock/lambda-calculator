import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button onClick={() => props.clickFunction(props.special)} className="button specialBtn" key={props.key}>{props.special}</button>
    </>
  );
};

export default SpecialButton;
