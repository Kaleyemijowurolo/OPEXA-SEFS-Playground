import React from "react";
import "./selectStyle.css";

const Select = (props) => (
  <div className="selectWrapper">
    <select className="select">
      {props.options.map((item) => (
        <option value="">{item}</option>
      ))}
    </select>
  </div>
);

export default Select;
