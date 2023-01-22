import React from "react";
import "./buttonStyle.css";

const Button = (props) => {
  return (
    <button
      className={`${props.primary ? "pry" : null} ${
        props.secondary ? "sec" : null
      }`}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
