import React, { useState, useEffect } from "react";
import "./App.css";

const DimensionConverter = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [deviceHeight, setDeviceHeight] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("pixels");
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
      setDeviceHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!inputValue) {
      setOutputValue("");
      return;
    }
    if (inputUnit === "pixels") {
      setOutputValue(`${(inputValue / deviceWidth) * 100}%`);
    } else {
      setOutputValue(`${(inputValue * deviceWidth) / 100}px`);
    }
  }, [inputValue, inputUnit, deviceWidth]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setInputUnit(event.target.value);
  };

  return (
    <div className="App">
      <label>
        Input value:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Input unit:
        <select value={inputUnit} onChange={handleSelectChange}>
          <option value="pixels">Pixels</option>
          <option value="percent">Percent</option>
        </select>
      </label>
      <br />
      <label>
        Output value:
        <input type="text" value={outputValue} readOnly />
      </label>
      <br />
      <p>Device Width: {deviceWidth}px</p>
      <p>Device Height: {deviceHeight}px</p>
    </div>
  );
};

export default DimensionConverter;
