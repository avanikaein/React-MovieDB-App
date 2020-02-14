import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Details = () => {

    useEffect(() => {
        getMovieInfo();
    }, [] );

    const [result, setResult] = useState({match: []});
    

    const movieId = window.location.pathname.split("/").pop()
    
    const getMovieInfo = async () => {
        const fetchMovie = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=dd04f3f65f4407443e82f601c12fb1fe`
        );

        const item = await fetchMovie.json();
        setResult(item);
        console.log(item);
        
    }

    // const addToFavourites = (e) => {
    //     e.preventDefault();
    //     // console.log("added to favourites list.");
    //     let currentMovie = {
    //         id: movieId,
    //         title: result.title,
    //         poster: result.poster_path
    //     }
    //     if(localStorage.getItem("favourites") === null){
    //         let favourites = [];
    //         favourites.push(currentMovie);
    //         localStorage.setItem("favourites", JSON.stringify(favourites));
    //     }
    //     else{
    //         let favourites = JSON.parse(localStorage.getItem("favourites"));

    //         if( favourites.indexOf( currentMovie === -1 )){
    //             //movie doesn't exist so we add it
    //             favourites.push(currentMovie);
    //             localStorage.setItem("favourites", JSON.stringify(favourites));
    //             console.log('movie added!')
                
    //         }else{
    //             alert('movie already in favourites!');
    //             return false;
    //         }


    //     }

    const addToFavourites = () => {
        let currentMovie = {
                    id: movieId,
                    title: result.title,
                    poster: result.poster_path
                }
        let favourites = JSON.parse(localStorage.getItem("favourites"));
        let foundFavourites = favourites.filter( obj=>obj.id == movieId);

        if(favourites == null){
            favourites = [];
        }
        
        if(foundFavourites == undefined || foundFavourites.length == 0){
            favourites.push(currentMovie);
            localStorage.setItem("favourites", JSON.stringify(favourites));
        }
    }



    return (
        <section>
            <h2>{result.title}</h2>
            <img src={"http://image.tmdb.org/t/p/w185" + result.poster_path} alt="Movie Poster" />
            <h3 key={result.id}><Link to={`/details/${result.id}`}>{result.title}</Link></h3>
            <i className="fa fa-star"></i>
            <span>{result.vote_average}/10</span>
            <p>Release Date: {result.release_date}</p>
            <p>{result.overview}</p>
            <button onClick={addToFavourites}>Add to Favourites</button>
        </section>
    )
}

export default Details;
