import React, {useState, useEffect} from 'react';

const Faves = () => {

  const [favourites, setFavourites] = useState([]);

  let favouritesFromStorage = JSON.parse(localStorage.getItem("favourites"));

  useEffect(() => {
    let favouritesFromStorage = JSON.parse(localStorage.getItem("favourites"));
    setFavourites(favouritesFromStorage);
  }, []);

  console.log(favouritesFromStorage);

  // const findFave = (title) => {
  //   let faves = localStorage.getItem('favourites');
  //   //if there is no favourties selected
  //   if( faves === null || faves === '' || faves === '[]'){
  //     return false;
  //   }
    //if we get here, it means that they have some favourite movies selected
  //   faves = JSON.parse(faves);
    
  //   const index = faves.findIndex((faveMovie) => {
  //     console.log(faveMovie.title);
  //     return faveMovie.title === title;
  //   });
  //   console.log(index);

  //   if(index === -1){
  //     return false;
  //   }else{
  //     faves.splice(index, 1);

  //   }
  // }

  const removeFromFavourites = (title) => {

     const index = favourites.findIndex((faveMovie) => {
      //console.log(faveMovie.title);
        return faveMovie.title === title;
    });
    //console.log(index);

    if(index === -1){
      return false;
    }else{
      let favsCopy = [...favourites];
      favsCopy.splice(index, 1);
      setFavourites(favsCopy);
      favsCopy = JSON.stringify(favsCopy);
      localStorage.setItem('favourites', favsCopy);
    }
 
  }

  return (
    <main>
        <h1>My Favourites Page</h1>
        {favourites || favourites.length > 0 ?  favourites.map(movie => (
            <div>
              <p>{movie.title}</p>
              <img src={"http://image.tmdb.org/t/p/w185" + movie.poster} alt="Movie Poster" />
              <p>{movie.overview}</p>
              <button onClick={() => { removeFromFavourites(movie.title) } }>Remove from Favourites</button>
            </div>
          ))
          :
          <p>No favourite movies selected.</p>
        }

    </main>
  );
}

export default Faves;