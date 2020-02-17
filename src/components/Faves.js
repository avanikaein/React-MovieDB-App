import React, { useState, useEffect } from "react";

const Faves = () => {
  const [favourites, setFavourites] = useState([]);

  let favouritesFromStorage = JSON.parse(localStorage.getItem("favourites"));

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
                <h4>{movie.title}</h4>
                <img
                  src={"http://image.tmdb.org/t/p/w185" + movie.poster}
                  alt="Movie Poster"
                />
                <p>{movie.overview}</p>
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
              </section>
            ))
          : ""}
      </div>
    </main>
  );
};

export default Faves;
