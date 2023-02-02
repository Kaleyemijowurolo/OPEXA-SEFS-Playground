import React from "react";
import Input from "../Input";
import Select from "../Select";
import "./customSelectStyle.css";

const CustomSelect = () => (
  <div className="custom_select">
    <Select
      styles={{ border: "none" }}
      //   className="select"
      options={countryCodes}
    />
    <Input />
  </div>
);

export default CustomSelect;

const countryCodes = [
  "+004",
  "+008",
  "+012",
  "+016",
  "+020",
  "+024",
  "+660",
  "+010",
  "+028",
];
