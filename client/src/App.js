import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      <Route exact path="/MovieList" component={MovieList}>
        <MovieList/>
      </Route>
      <Route exact path="/MovieList/:itemID">
        <Item/>
      </Route>
    </div>
  );
};

export default App;
