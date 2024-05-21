import React from "react";

function Pill({ image, text, onclick }) {
  return (
    <span
      className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl px-2 cursor-pointer"
      onClick={onclick}
    >
      <img src={image} alt={text} className="w-5" />
      <span className="text-base text-white">{text} &times;</span>
    </span>
  );
}

export default Pill;
