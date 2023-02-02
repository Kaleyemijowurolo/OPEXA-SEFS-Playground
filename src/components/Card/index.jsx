import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardStyle.css";

const Card = ({ width, height, styles, children }) => (
  <div
    style={{
      width: `${width}`,
      height: `${height}`,
      ...styles,
    }}
    className="_card"
  >
    {children}
  </div>
);

export default Card;

export const NikeShoe = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img src="https://assets.codepen.io/4164355/shoes.png" alt="pics" />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link to="#">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export const Tools = ({ style, minimized, setMinimized }) => (
  <span style={style} className="tools">
    {minimized === false ? (
      <div onClick={() => setMinimized(true)} className="card_absolute_circle">
        <i
          style={{
            fontSize: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2px",
          }}
          className="fa fa-window-minimize yellow card_absolute_box"
        ></i>
      </div>
    ) : (
      <div onClick={() => setMinimized(false)} className="card_absolute_circle">
        <i
          style={{
            fontSize: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px",
          }}
          className="fa fa-window-maximize green card_absolute_box"
        ></i>
      </div>
    )}
  </span>
);

export const AbsoluteCard = () => {
  return (
    <div className="card_absolute">
      <div className="tools">
        <div className="card_absolute_circle">
          <span className="red card_absolute_box"></span>
        </div>
        <div className="card_absolute_circle">
          <span className="yellow card_absolute_box"></span>
        </div>
        <div className="card_absolute_circle">
          <span className="green card_absolute_box"></span>
        </div>
      </div>
      <div className="card__content"></div>
    </div>
  );
};

export const MinimizableCard = () => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className={`mcard ${minimized ? "minimized" : ""}`}>
      <div className="card-header">
        <div className="toolsHolder">
          <Tools minimized={minimized} setMinimized={setMinimized} />
        </div>
        <h3>Card Title</h3>
        {/* <button onClick={() => setMinimized(!minimized)}>
          {minimized ? "Maximize" : "Minimize"}
        </button> */}
      </div>
      <div className="card-body">
        <p>Card Content</p>
      </div>
    </div>
  );
};
