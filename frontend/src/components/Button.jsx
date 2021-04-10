import React from "react";

export default function Button({ text, normal = true, onClick = null }) {
  const classCss = `text-lg ${
    normal ? "bg-blue-600" : "bg-pink-600"
  } shadow-md  text-white rounded-md font-bold px-3 py-2 hover:${
    normal ? "bg-blue-800" : "bg-pink-800"
  } hover:shadow-lg transition duration-500 ease-in-out`;
  return (
    <button className={classCss} onClick={(e) => onClick(e)}>
      {text}
    </button>
  );
}
