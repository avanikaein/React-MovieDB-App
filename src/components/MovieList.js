import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div>
            <section className="home-body">
                {
                    props.movies.map( (movie, i)=>{
                        return (
                        <Movie key={i} release_date={movie.release_date} rating={movie.vote_average} image={movie.poster_path} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} title={movie.title} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default MovieList;
