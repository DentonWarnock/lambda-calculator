import React, { useState } from "react";
import { specials } from "../../../data.js";
import SpecialButton from "./SpecialButton.js"; 

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);
  
  return (
    <div>
      {specialState.map((char, index) => (
        <SpecialButton key={index} special={char} />
      ))}
    </div>
  );
};

export default Specials;
