import React from "react";
import Letters from "./Letters";

const HangmanCom = props => {
  return props.hangmanArray.map((letter, index) => (
    <span key={index}>{letter}</span>
  ));
};

const HandleHangman = props => {
  const movieArray = [
    "G",
    "u",
    "a",
    "r",
    "d",
    "i",
    "a",
    "n",
    "s",
    " ",
    "o",
    "f",
    " ",
    "t",
    "h",
    "e",
    " ",
    "G",
    "a",
    "l",
    "a",
    "x",
    "y"
  ];

  const createHangmanArray = (array, letter) => {
    let newArray = array;

    movieArray.forEach((l, index) => {
      if (l.toLowerCase() === letter.toLowerCase()) {
        return (newArray[index] = l);
      } else if (!array[index]) {
        return (newArray[index] = "_");
      }
    });
    return newArray;
  };

  const [hangmanArray, setHangmanArray] = React.useState(
    createHangmanArray([], "_")
  );
  console.log("yoooo", hangmanArray);

  const [letterState, setLetterState] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const handleHangmanLetterUpdate = letter => {
    setLetterState(letter);
    console.log(letter);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1 className="counter">{counter}</h1>
      {counter === 8 ? alert(" LOL YOU DEAD! :(  ") : null}
      <HangmanCom
        hangmanArray={createHangmanArray(hangmanArray, letterState)}
      />
      <Letters handleLetterSelection={handleHangmanLetterUpdate} />
    </div>
  );
};

export default HandleHangman;
