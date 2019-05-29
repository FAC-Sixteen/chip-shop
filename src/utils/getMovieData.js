const getMovieData = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e0cf38b285b4edbae61d3cb5b6086614&region=uk&page=16"
  )
    .then(response => response.json())
    .catch(err => err);
};

export default getMovieData;
