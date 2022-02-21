import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, text, rate, fasakhMovie }) => {
  const filtred = movies
    .filter((film) => film.name.toLowerCase().includes(text.toLowerCase()))
    .filter((film) => film.rating >= rate);
  return (
    <div
      style={{
        display: "table-footer-group",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {filtred.length ? (
        filtred.map((movie) => (
          <MovieCard movie={movie} key={movie.id} fasakhMovie={fasakhMovie} />
        ))
      ) : (
        <h1>There is nomovie</h1>
      )}
    </div>
  );
};

export default MovieList;