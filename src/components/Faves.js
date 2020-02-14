import React from 'react';


function Faves() {

  let favourites = JSON.parse(localStorage.getItem("favourites"));

  const findFave = (title) => {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if(favourites === null || favourites === '' || favourites === '[]'){
      console.log("local storage empty")
      return false;
    }
    favourites = JSON.parse(favourites);
  
  }

  const removeFromFavourites = (movieArray, movie) => {

    console.log("hello from handle remove from favourites")
 
  }

  return (
    <div onLoad={findFave}>
        <h1>My Favourites Page</h1>
        {favourites ?  favourites.map(movie => (
            <div>
              <p>{movie.title}</p>
              <img src={"http://image.tmdb.org/t/p/w185" + movie.poster} alt="Movie Poster" />
              <p>{movie.overview}</p>
              <button onClick={removeFromFavourites}>Remove from Favourites</button>
            </div>
          ))
          :
          <p>No favourite movies selected.</p>
        }

    </div>
  );
}

export default Faves;