import React from "react";

const Letters = ({ handleLetterSelection }) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  return (
    <div>
      <ul className="letters-container">
        {alphabet.map((letter, i) => (
          <li
            className="digits"
            onClick={() => handleLetterSelection(letter)}
            key={i}
          >
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Letters;
