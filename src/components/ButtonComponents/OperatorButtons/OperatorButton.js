import React from "react";

const OperatorButton = (props) => {
  return (
    <>      
        <button className="button operatorBtn" key={props.key}>{props.operator.char}</button>           
    </>
  );
};

export default OperatorButton;
