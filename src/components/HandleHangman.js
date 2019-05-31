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

  const [letterState, setLetterState] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const handleHangmanLetterUpdate = letter => {
    setLetterState(letter);
    setCounter(counter + 1);
  };
  console.log("counting this shit", counter);

  console.log("clicked", hangmanArray);

  return (
    <div>
      <HangmanCom
        hangmanArray={createHangmanArray(hangmanArray, letterState, counter)}
      />
      <Letters handleLetterSelection={handleHangmanLetterUpdate} />
    </div>
  );
};

export default HandleHangman;
