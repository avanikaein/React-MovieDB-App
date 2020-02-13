import React from 'react';

const Movie = (props) => {
    return (
        <div>
            {
                props.image == null ?  <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="No Movie Poster"/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster" />
            }
            <p><a href="#" onClick={ () => props.viewMovieInfo(props.movieId)}>View Details</a></p>   
        </div>

    )
}

export default Movie;
