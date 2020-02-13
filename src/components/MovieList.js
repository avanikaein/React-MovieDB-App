import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div>
            <section>
                {
                    props.movies.map( (movie, i)=>{
                        return (
                        <Movie key={i} image={movie.poster_path} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default MovieList;
