import React from "react";

const Letters = props => {
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

  const [letter, setLetter] = React.useState("");
  const [movie, setMovie] = React.useState("");

  //   React.useEffect(() => {
  //     document
  //       .getElementsByClassName("digits")
  //       .addEventListener("click", handleLetterSelection);
  //     return () => {
  //       document
  //         .getElementsByClassName("digits")
  //         .removeEventListener("click", handleLetterSelection);
  //     };
  //   }, []);

  const handleLetterSelection = letter => {
    setLetter(letter);
  };
  console.log(letter);
  return (
    <div>
      <ul className="letters-container">
        {alphabet.map(letter => (
          <li className="digits" onClick={() => handleLetterSelection(letter)}>
            {letter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Letters;
