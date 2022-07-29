import React from "react";
import { directors } from "../data";

function Directors() {
  const directorComponents = directors.map((directorObj) => (
    <div key={directorObj.name}>
      <h2>{directorObj.name}</h2>
      <ul>
        {directorObj.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>  
  ))
  
  return (
  <div>
    <h1>Directors Page</h1>
    {directorComponents}
  </div>
  )
}

export default Directors;
