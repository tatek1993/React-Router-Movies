import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path="/" component={MovieList}>
        <MovieList/>
      </Route>

      <Route exact path="/movies/:itemID">
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
