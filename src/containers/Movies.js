import React, { Component } from 'react';
import Movie from '../components/Movie';

class movies extends Component {
  state = {
    movies: [
      {
        id: 1, name: "Jhon Wick", genre: "Action", year: 2018
      },
      {
        id: 2, name: "Jhon Wick", genre: "Action", year: 2018
      },
      {
        id: 3, name: "Jhon Wick", genre: "Action", year: 2018
      },
      {
        id: 4, name: "Jhon Wick", genre: "Action", year: 2018
      }
    ]
  }
  render() {
    return (
      <div className='movies'>
        {
          this.state.movies.map((movie) =>{
            return <Movie key={movie.id}  movie={movie}></Movie>
          })
        }
        
      </div>
    );
  }
}

export default movies;