import React from "react";
import classNames from "classnames";

const CustomButton = ({ title, bgColor, textColor }) => {
  const buttonClass = classNames(
    "px-4 pb-1 pt-0.5 rounded-full ",
    bgColor || "bg-black",
    textColor || "text-white"
  );

  return <button className={buttonClass}><span>{title}</span></button>;
};

export default CustomButton;
