import React from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Route path="/">
      <Home />
    </Route>
  </div>
);

export default SavedList;
