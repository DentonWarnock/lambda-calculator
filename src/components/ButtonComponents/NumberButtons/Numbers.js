import React, { useState } from "react";
import { numbers } from "../../../data.js";
import NumberButton from "./NumberButton.js";


export default function Numbers(props) {
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {numberState.map((num, index) => (
        <NumberButton setValue={props.setValue} key={index} num={num} />
      ))}
    </div>
  );
};
