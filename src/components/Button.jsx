import React from 'react';

const Button = ({ value, link, bgColor }) => {
  var text = "";

  if (bgColor === "white") {
    text = "c1"
  } else {
    text = "white"
  }
  
  return (
    <a href={link} className={`bg-${bgColor} text-${text} text-xl px-4 py-2 rounded-xl flex justify-center w-full`}>
      { value }
    </a>
  );
};

export default Button;
