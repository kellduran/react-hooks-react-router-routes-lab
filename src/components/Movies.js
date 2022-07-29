import React from "react";
import { movies } from "../data";

function Movies() {
  const movieComponents = movies.map((moiveObj) => (
    <div key={moiveObj.title}>
      <h2>Name: {moiveObj.title}</h2>
      <h3>Time: {moiveObj.time}</h3>
      <ul>
        {moiveObj.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>
      <h1>Movies Page</h1>
      {movieComponents}
    </div>
  );
}

export default Movies;
