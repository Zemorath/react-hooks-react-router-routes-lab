import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Page</h1>{movies.map((movie) => (
    <div key={movie.title}>
      Title: {movie.title}
      <br></br>Time: {movie.time}
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  ))}</div>;
}

export default Movies;
