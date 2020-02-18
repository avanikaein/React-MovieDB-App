import React from 'react';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';


class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: [],
            searchTerm: '',
            totalResults: 0,
            currentPage: 1,
            currentMovie: null,
            rating: 0,
            faves: JSON.parse(localStorage.getItem("favourites"))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd04f3f65f4407443e82f601c12fb1fe&query=${this.state.searchTerm}`).then(data => data.json()).then(data=>{
            // console.log(data);
            this.setState({movies: [...data.results], totalResults: data.total_results, rating: data.results.vote_average});
        })
    }

    handleChange = (e) => {
        this.setState( { searchTerm: e.target.value })
    }

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd04f3f65f4407443e82f601c12fb1fe&query=${this.state.searchTerm}&page=${pageNumber}`).then(data => data.json()).then(data=>{
            // console.log(data);
            this.setState({movies: [...data.results], currentPage: pageNumber});
        })
    }

    viewMovieInfo = (id) => {
        const filteredMovie = this.state.movies.filter( movie => movie.id == id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        this.setState( {currentMovie: newCurrentMovie} );
    }

    closeMovieInfo = () => {
        this.setState( {currentMovie: null} )
    }

 
 
    render(){
        const numberPages = Math.floor(this.state.totalResults / 20)

        return(
            <main className="search-body">
                {this.state.currentMovie == null ? 
                <div>
                    <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    <MovieList movies={this.state.movies} viewMovieInfo={this.viewMovieInfo} />
                </div>
                :
                <MovieInfo closeMovieInfo={this.viewMovieInfo} currentMovie={this.state.currentMovie} rating={this.state.rating} />
                }
                {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' }
            </main>
        )
    }
}

export default Search;