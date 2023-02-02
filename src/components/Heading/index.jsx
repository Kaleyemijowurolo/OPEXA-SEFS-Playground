import React from "react";
import "./headingStyle.css";

const Heading = ({
  title,
  titleStyle,
  subTitle,
  subTitleStyle,
  icon,
  iconStyle,
}) => {
  return (
    <div className="heading">
      <div className="icon">
        {icon === "mail" ? (
          <MailIcon iconStyle={iconStyle} />
        ) : icon === "success" ? (
          <SuccessIcon iconStyle={iconStyle} />
        ) : null}
      </div>
      <div className="title" style={titleStyle}>
        {title}
      </div>
      <div className="sub_title" style={subTitleStyle}>
        {subTitle}
      </div>
    </div>
  );
};

export default Heading;

const MailIcon = ({ iconStyle }) => (
  <img
    className="image"
    style={iconStyle}
    src={"/assets/mail.jpg"}
    alt={"mail"}
  />
);

const SuccessIcon = ({ iconStyle }) => (
  <img
    className="image"
    style={iconStyle}
    src={"/assets/success.jpg"}
    alt={"success"}
  />
);
