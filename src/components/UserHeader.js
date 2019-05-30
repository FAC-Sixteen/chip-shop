import React from "react";
import getMovieData from "../utils/getMovieData";

const UserHeader = props => {
  const [apiData, setApiData] = React.useState("");
  React.useEffect(() => {
    getMovieData().then(data => setApiData(data));
  }, []);
  if (!apiData) {
    return <h3>...Loading</h3>;
  }
  console.log(apiData);
  return (
    <div>
      <h1>Ryan, James & Dylan</h1>
    </div>
  );
};

export default UserHeader;
