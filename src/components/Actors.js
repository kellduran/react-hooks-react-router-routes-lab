import React from "react";
import { actors } from "../data";

function Actors() {
  const actorComponent = actors.map((actorObj) => (
    
      <div key={actorObj.name}>
        <h2>Name: {actorObj.name}</h2>
        <ul>
          Movies:
          {actorObj.movies.map((movie) => 
            <li key={movie}>{movie}</li> )}
        </ul>
      </div>
    )
  )
  return (
    <div>
      <h1>Actors Page</h1>
      {actorComponent}
    </div>
  )
}

export default Actors;
