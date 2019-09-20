import React from "react";

const SpecialButton = (prpos) => {
  return (
    <>
      <button className="button specialBtn" key={prpos.key}>{prpos.special}</button>
    </>
  );
};

export default SpecialButton;
