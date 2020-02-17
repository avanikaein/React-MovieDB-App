import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';


const PopularMovies = () => {
    useEffect(() => {
        getMovies();
    }, []);

    //setting state, empty array to start with
    const [results, setResults] = useState([]);

    //fetch movies from moviedb api
    const getMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=dd04f3f65f4407443e82f601c12fb1fe&language=en-US&page=1"
        );
        const movies = await data.json();
        console.log(movies);
        setResults(movies.results.slice(0, 12));
    }

    return (
        <div className="app-body">
           <h3>Popular Today</h3>
           {results.map(item => (
               <section class="movie-item">
                   <figure>
                   <Link to={`/details/${item.id}`}>
                       <img src={"http://image.tmdb.org/t/p/w185" + item.poster_path} alt="Movie Poster" />
                   </Link>
                   </figure>
                   <h4 key={item.id}>
                       <Link to={`/details/${item.id}`}>{item.title}</Link>
                    </h4>
                   <i className="fa fa-star"></i>
                   <span>{item.vote_average}/10</span> 
                   <p>Release Date: {item.release_date}</p>
                   <p>
                       {item.overview.split(".")[0]}.
                    </p>
                    <p id="view-details-btn">
                       <Link to={`/details/${item.id}`}>View Details</Link>
                   </p>
               </section>
           ))}
        </div>
    );
}

export default PopularMovies;
