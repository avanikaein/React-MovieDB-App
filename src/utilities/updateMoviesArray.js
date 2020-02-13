//update app's favourite movies 

//add movie
// -check if new item is in the current array
// -if its not, then add it. If its already there, don't add it.

const addMovieToFaves = (moviesArray, movie) => {
    //make a copy
    const updatedMovieArray = [...moviesArray];

    //does it already exist?
    const movieMatch = (currentMovie) => currentMovie.movie === movie;
    
    const movieIndex = moviesArray.findIndex(movieMatch);

    //if movieIndex is -1 then this is a new movie being added
    if (movieIndex === -1){
        updatedMovieArray.push( {movie} );
        return updatedMovieArray;
    }
}