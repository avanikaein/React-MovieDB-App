import React from 'react';
import PopularMovies from './PopularMovies';


function Home() {

  const scrollUp = () =>{
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollUp);

    if ( top > 0){
      window.scrollTo(0, top - 15);
      setTimeout(scrollUp, 1);
    }
  }

  return (
    <main >
      <h3>Popular Today</h3>
      <PopularMovies />
      <a className="move-up" onClick={scrollUp}><i class="fas fa-angle-up"></i></a>
    </main>
  );
}

export default Home;