import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//pages
import Home from './components/Home';
import About from './components/About';
import Faves from './components/Faves';
import PageNotFound from './components/PageNotFound';
import Details from './components/Details'; 

//components
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Search from './components/Search';

const AppRouter = () => {
  return ( 
    <Router basename={'/movie-app'}>
      <div className="wrapper">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about" ><About /></Route>
          <Route path="/favourites"><Faves /></Route>
          <Route path="/search"><Search /></Route>
          <Route path="/details/:id"><Details /></Route>
          <Route><PageNotFound /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
