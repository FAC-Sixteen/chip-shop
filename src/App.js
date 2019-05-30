import React from "react";
import "./App.css";
import UserHeader from "./components/UserHeader";
import Letters from "./components/Letters";
import getMovieData from "./utils/getMovieData";
import AddMovieToPage from "./components/AddMovieToPage";

const App = () => {
  const [apiData, setApiData] = React.useState("");
  React.useEffect(() => {
    getMovieData().then(data => setApiData(data));
  }, []);

  if (!apiData) {
    return <h3>...Loading</h3>;
  }
  // console.log(apiData);

  return (
    <div className="App">
      <h1 className="title">handleHangman</h1>
      <UserHeader />
      <AddMovieToPage apiData={apiData} />
      <Letters />
    </div>
  );
};

export default App;
