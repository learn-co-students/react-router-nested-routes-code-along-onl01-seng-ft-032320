// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow'

const MoviesPage = (props) => {
  return(
    <div>
      <MoviesList movies={props.movies} />
      <Route exact path={props.match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
      <Route path={`${props.match.url}/:movieId`} render={routerProps => <MovieShow movies={props.movies} {...routerProps}/>}/>
    </div>
  )

}



export default MoviesPage
