import React, { useState } from "react";
import { numbers } from "../../../data.js";
import NumberButton from "./NumberButton.js";


export default function Numbers() {
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {numberState.map((num, index) => (
        <NumberButton key={index} num={num} />
      ))}
    </div>
  );
};
