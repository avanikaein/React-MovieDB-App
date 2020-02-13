import React from 'react';

const MovieInfo = (props) => {
    return (
        <section onClick={props.closeMovieInfo}>
            <i className="fas fa-arrow-left"></i>
            <span>Go Back</span>
            <figure>
                { props.currentMovie.poster_path == null ? <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="No Movie Poster"/> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Movie Poster" /> }
            </figure>
            <h3>{props.currentMovie.title}</h3>
            <p>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
            <p>{props.currentMovie.overview}</p>
        </section>
        
    )
}

export default MovieInfo;
