import React from "react";

export default function NumberButton(props) {
  return (
    <>
      <button onClick={() => props.setValue(props.num)} className="button numberBtn" key={props.key}>{props.num}</button> 
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
