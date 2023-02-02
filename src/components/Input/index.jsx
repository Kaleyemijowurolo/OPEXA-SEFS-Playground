import React from "react";
import "./inputStyle.css";

const Input = (props) => (
  <input placeholder={`${props.placeholder || ""}`} className="input" />
);
export default Input;

const Slider = () => <input type="range" />;

const EditableInput = () => <input type="input" contentEditable />;

const DatePicker = () => <input type={"date"} />;

const LocaleDatePicker = () => <input type={"datetime-local"} />;

export { Slider, DatePicker, EditableInput, LocaleDatePicker };
