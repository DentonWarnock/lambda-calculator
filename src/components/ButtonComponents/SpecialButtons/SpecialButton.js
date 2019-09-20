import React from "react";

const SpecialButton = (prpos) => {
  return (
    <>
      <button key={prpos.key}>{prpos.special}</button>
    </>
  );
};

export default SpecialButton;
