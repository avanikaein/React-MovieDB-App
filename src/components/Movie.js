import React from 'react';
import { Link } from "react-router-dom";

const Movie = (props) => {
    return (
        <section className="movie-item">
            {
                props.image == null ?  <Link to={`/details/${props.movieId}`}><figure><img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="No Movie Poster"/></figure></Link> : <Link to={`/details/${props.movieId}`}><img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster" /></Link>
            }
             <h4><Link to={`/details/${props.movieId}`}>{props.title}</Link></h4>
             
             <i className="fa fa-star"></i>
            <span>{props.rating} /10</span> 

            <p>Release Date: {props.release_date.substring(5).split("-").concat(props.release_date.substring(0, 4)).join("/")}</p>

            <p id="view-details-btn"><a href="#" onClick={ () => props.viewMovieInfo(props.movieId)}>View Details</a></p>  
           
        </section>

    )
}

export default Movie;
