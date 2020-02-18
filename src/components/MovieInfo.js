import React from "react";

import $ from 'jquery';

const MovieInfo = (props) => {

   const addToFavourites = (e) => {
       e.preventDefault();
        let currentMovie = {
          id: props.currentMovie.id,
          title: props.currentMovie.title,
          poster: props.currentMovie.poster_path,
          release_date: props.currentMovie.release_date
        };
        let favourites = JSON.parse(localStorage.getItem("favourites"));
        let foundFavourites = favourites.filter(obj => obj.id === currentMovie.id);
    
        if (favourites == null) {
          favourites = [];
        }
    
        if (foundFavourites === undefined || foundFavourites.length === 0) { 
          favourites.push(currentMovie);
          localStorage.setItem("favourites", JSON.stringify(favourites));
          $('div.success').fadeIn(300).delay(1500).fadeOut(400);
        }
        $('div.success').fadeIn(300).delay(1500).fadeOut(400);
      };

  return (
    <section className="movie-details">
      <figure>
        {props.currentMovie.poster_path == null ? (
          <img
            src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
            alt="No Movie Poster"
          />
        ) : (
        <img
            src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
            alt="Movie Poster"
          />
        )}
      </figure>
      <div className="movie-details-writing">
        <h3 key={props.currentMovie.id}>{props.currentMovie.title}</h3>
        <i className="fa fa-star"></i>
        <span>{props.currentMovie.vote_average}/10</span>
        <p>
          Release Date:{" "}
          {props.currentMovie.release_date
            .substring(5)
            .split("-")
            .concat(props.currentMovie.release_date.substring(0, 4))
            .join("/")}
        </p>
        <p>{props.currentMovie.overview}</p>
        <span onClick={addToFavourites} id="success-message">
          <i class="fas fa-heart" title="Add To Favourties"></i>
        </span>
        <div className="alert-box success"> Added to your Favourites!</div>
        <div onClick={props.closeMovieInfo} >
          <i className="fas fa-arrow-left" ></i>
          <span className="back-btn">Back to Search Results</span>
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;
