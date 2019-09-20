import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button key={props.key}>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;
