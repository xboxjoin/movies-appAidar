import React from 'react';
import Movie from './Movie';
import './Movies.css';

const Movies = (props) => {

    const {movies} = props;

    return <div className='movies'>
            {movies.map((movie) => (
                <Movie key = {movie.imdbID} {...movie}></Movie>
            ))}
        </div>
}

export default Movies;