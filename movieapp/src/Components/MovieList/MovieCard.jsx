import React from "react";
import { Rating } from "@mui/material";

const MovieCard = ({ movie, fasakhMovie }) => {
  return (
    <div className="mvcards">
      <img className="image" src={movie.image} alt={movie.name} />
      <br />
      <h1 className="mvcard">{movie.name}</h1>
      <p style={{
    color: "white",
   
     
   }}>{movie.description}</p>
      <Rating name="read-only" value={movie.rating} readOnly />
      <button className="enzel" onClick={() => fasakhMovie(movie.id)}>X</button>
    </div>
  );
};

export default MovieCard;