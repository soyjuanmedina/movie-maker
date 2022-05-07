import React, { Component } from 'react';
import Movie from '../components/Movie';

class movies extends Component {
  state = {
    movies: [
      {
        id: 1, name: "Jhon Wick", genre: "Action", year: 2018, img: "https://rb.gy/kfuw0u"
      },
      {
        id: 2, name: "Jhon Wick", genre: "Action", year: 2018, img: "https://rb.gy/kfuw0u"
      },
      {
        id: 3, name: "Jhon Wick", genre: "Action", year: 2018, img: "https://rb.gy/kfuw0u"
      },
      {
        id: 4, name: "Jhon Wick", genre: "Action", year: 2018, img: "https://rb.gy/kfuw0u"
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