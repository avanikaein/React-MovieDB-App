import React from 'react';


function Faves() {

  let favourites = JSON.parse(localStorage.getItem("favourites"));

  return (
    <div>
        <h1>My Favourites Page</h1>
        {favourites.map(movie => (
            <div>
              <p>{movie.title}</p>
              <img src={"http://image.tmdb.org/t/p/w185" + movie.poster} alt="Movie Poster" />
              <p>{movie.overview}</p>
            </div>
          ))
        }
    </div>
  );
}

export default Faves;