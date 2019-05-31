import React from "react";
import "./App.css";
import UserHeader from "./components/UserHeader";
import HandleHangman from "./components/HandleHangman";
import HangmanImg from "./components/HangmanImg";

const App = () => {
  // const [apiData, setApiData] = React.useState("");
  // React.useEffect(() => {
  //   getMovieData().then(data => setApiData(data));
  // }, []);

  // if (!apiData) {
  //   return <h3>...Loading</h3>;
  // }

  // TODO: get movie data from api

  return (
    <div className="App">
      <h1 className="title">handleHangman</h1>
      <UserHeader />
      <HangmanImg />
      <HandleHangman />
    </div>
  );
};

export default App;
