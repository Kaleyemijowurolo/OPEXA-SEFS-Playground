import React, { useState, useEffect } from "react";
import "./App.css";
import DeviceInfo from "./DetectDevice";

const DimensionConverter = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [deviceHeight, setDeviceHeight] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("Pixels");
  const [outputValue, setOutputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(deviceHeight, "Device Height");
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
    if (inputUnit === "Pixels") {
      setOutputValue(`${Math.round((inputValue / deviceWidth) * 100)}%`);
    } else {
      setOutputValue(`${Math.round((inputValue * deviceWidth) / 100)}px`);
    }
  }, [inputValue, inputUnit, deviceWidth]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setInputUnit(event.target.innerText);
  };

  return (
    <div className=" dark:bg-gray-800 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[50%] h-[60%] flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-whitesmoke-800 dark:border-gray-700">
        <div className="w-[70%] h-[70%]">
          <form>
            <div className="flex relative">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                {inputUnit}
                <svg
                  onClick={() => setToggle(!toggle)}
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {toggle && (
                <div
                  id="dropdown"
                  className="-z-1 absolute top-7 pt-3 bg-white divide-y divide-gray-100 rounded-lg shadow w-[136px] dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        onClick={handleSelectChange}
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Pixels
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={handleSelectChange}
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Percentage
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <div className="relative w-full">
                <input
                  type="number"
                  id="search-dropdown"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Enter the value to convert, Pixels or Percentage"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 py-2.5 px-5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span className=" text-sm">
                    {inputUnit === "Pixels" ? "PX" : "%"}
                  </span>
                </button>
              </div>
            </div>
          </form>

          <br />
          <br />
          <div className="h-[80%] w-full flex items-center justify-center border-[.5px] relative">
            <div className="w-[60%] h-[90%]  text-center">
              {outputValue && (
                <span className="text-[80px] w-full border-[.7px] px-5 py-2 text-white  dark:bg-gray-800 rounded-lg">
                  {outputValue}
                </span>
              )}
            </div>
            <div className="absolute bottom-0 left-0">
              <DeviceInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionConverter;
