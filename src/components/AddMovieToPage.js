import React from "react";

const AddMovieToPage = props => {
  const randomNum = () => {
    const random = Math.floor(Math.random() * 18) + 1;
    console.log(random);
    return random;
  };

  const splitMovieArray = () => {
    const movieNameArray = props.apiData[randomNum()];
    const splitMovieArr = movieNameArray.split("");
    return splitMovieArr;
  };

  const [movie, setMovie] = React.useState(splitMovieArray());
  console.log(movie);

  return (
    <div>
      <h1>{movie}</h1>
    </div>
  );
};

export default AddMovieToPage;
