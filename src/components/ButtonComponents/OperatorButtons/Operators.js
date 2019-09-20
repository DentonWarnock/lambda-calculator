import React, { useState } from "react";
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton.js";

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  
  return (
    <div className="operatorBtnContainer">
      {operatorState.map((ops, index) => (
        <OperatorButton key={index} operator={ops} />
        ))   
      }
    </div>
  );
};

export default Operators
