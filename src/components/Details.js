import React, { useState, useEffect } from "react";
import $ from 'jquery';


const Details = () => {

  useEffect(() => {
    getMovieInfo();
  }, []);

  const [result, setResult] = useState({ match: [] });

  const movieId = window.location.pathname.split("/").pop();

  const getMovieInfo = async () => {
    const fetchMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=dd04f3f65f4407443e82f601c12fb1fe`
    );

    const item = await fetchMovie.json();
    setResult(item);
    console.log(item);
  };

  const addToFavourites = () => {
    let currentMovie = {
      id: movieId,
      title: result.title,
      poster: result.poster_path,
      release_date: result.release_date
    };
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    if(favourites){
      let foundFavourites = favourites.filter(obj => obj.id === movieId);
      if (foundFavourites === undefined || foundFavourites.length === 0) {
        favourites.push(currentMovie);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        $('div.success').fadeIn(300).delay(1500).fadeOut(400);
      }
    }else if (favourites == null) {
      favourites = [];
      favourites.push(currentMovie);
        localStorage.setItem("favourites", JSON.stringify(favourites));
        $('div.success').fadeIn(300).delay(1500).fadeOut(400);
    }

    
    $('div.success').fadeIn(300).delay(1500).fadeOut(400);
  
  };

  return (
    <main>
      <section className="movie-details">
        <figure> {result.poster_path == null ? <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="No Movie Poster"/> : 
          <img
            src={"http://image.tmdb.org/t/p/w185" + result.poster_path}
            alt="Movie Poster" /> }
        </figure>
        <div className="movie-details-writing">
        <h3 key={result.id}>
          {result.title}
        </h3>
        <i className="fa fa-star"></i>
        <span>{result.vote_average}/10</span>
        <p>Release Date: {result.release_date}</p>
        <p>{result.overview}</p>
        <span onClick={addToFavourites} id='success-message'><i class="fas fa-heart" title="Add To Favourties"></i></span>
        <div className="alert-box success"> Added to your Favourites!</div>

        </div>
      </section>
    </main>
  );
};

export default Details;


