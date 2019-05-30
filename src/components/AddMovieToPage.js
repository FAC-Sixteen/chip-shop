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

  const underscoreMovies = title => {
    const newTitle = title.join(" ").replace(/[A-Za-z]/gi, "_");
    console.log(newTitle);
    return newTitle;
  };

  const [movie, setMovie] = React.useState(splitMovieArray());
  const [underscoreMovie, setUnderscoreMovie] = React.useState(
    underscoreMovies(movie)
  );
  console.log(movie);

  return (
    <div>
      <h1>{movie}</h1>
      <h1>{underscoreMovie}</h1>
    </div>
  );
};

export default AddMovieToPage;
