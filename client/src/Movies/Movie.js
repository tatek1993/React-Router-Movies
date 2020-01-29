import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

 
const Movie = (props) => {
  const [movie, setMovie] = useState();
  // const movieStateArray = useState();
  // const movie = movieStateArray[0];
  // const setMovie = movieStateArray[1];
  console.log("These are the useParams", useParams());
  const { itemID } = useParams();
  //this allows us to grab the itemID from the URL. itemID is referencing whatever id# comes after /movies in the url

  useEffect(() => {
    const id = itemID;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  }, [itemID]);
  //we put itemID in this DEPENDENCY ARRAY because we need to specify the information that is coming from outside of the fn
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
