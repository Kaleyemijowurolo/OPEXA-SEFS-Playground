import React from "react";
import "./inputStyle.css";

const Input = (props) => (
  <input placeholder={`${props.placeholder}`} className="input" />
);

export default Input;
