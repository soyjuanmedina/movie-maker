import React from 'react';

function Movie(props) {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.movie.name}</h5>
      <p className="card-text">{props.movie.genre} - {props.movie.year}</p>
    </div>
  </div>
  );
}

export default Movie;