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
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
