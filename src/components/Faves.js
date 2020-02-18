import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Faves = () => {
  const [favourites, setFavourites] = useState([]);

  // let favouritesFromStorage = JSON.parse(localStorage.getItem("favourites"));

  useEffect(() => {
    let favouritesFromStorage = JSON.parse(localStorage.getItem("favourites"));
    setFavourites(favouritesFromStorage);
  }, []);

  // console.log(favouritesFromStorage);

  const removeFromFavourites = title => {
    const index = favourites.findIndex(faveMovie => {
      //console.log(faveMovie.title);
      return faveMovie.title === title;
    });
    //console.log(index);

    if (index === -1) {
      return false;
    } else {
      let favsCopy = [...favourites];
      favsCopy.splice(index, 1);
      setFavourites(favsCopy);
      favsCopy = JSON.stringify(favsCopy);
      localStorage.setItem("favourites", favsCopy);
    }
  };

  return (
    <main>
      <h3>My Favourites</h3>
      <div className="favourites-body">
        {favourites || favourites.length > 0
          ? favourites.map(movie => (
              <section class="movie-item">
                <span 
                  onClick={() => {
                    removeFromFavourites(movie.title);
                  }} 
                >
                  <i
                    class="fas fa-heart-broken"
                    title="Remove from favourites"
                  ></i>
                </span>
                <figure>
                  <Link to={`/details/${movie.id}`}>
                    <img
                      src={"http://image.tmdb.org/t/p/w185" + movie.poster}
                      alt="Movie Poster"
                    />
                  </Link>
                </figure>
                <h4 key={movie.id}>
                  <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                </h4>
                <p id="view-details-btn">
                  <Link to={`/details/${movie.id}`}>View Details</Link>
                </p>
              </section>
            ))
          : ""}
      </div>
    </main>
  );
};

export default Faves;
