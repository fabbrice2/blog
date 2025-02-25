import React from "react";

const TextComponent = ({ text, maxLength }) => {
  const truncatedText = truncateText(text, maxLength);

  return <p className="text-gray-700">{truncatedText}</p>;
};

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default TextComponent;
