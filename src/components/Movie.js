import React from 'react';

const Movie = (props) => {
    return (
        <section className="movie-item">
            {
                props.image == null ?  <figure><img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="No Movie Poster"/></figure> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster" />
            }

            <p id="view-details-btn"><a href="#" onClick={ () => props.viewMovieInfo(props.movieId)}>View Details</a></p>   
        </section>

    )
}

export default Movie;
