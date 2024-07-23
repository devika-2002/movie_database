import React from 'react';

function Movie({ movies }) {
    return (
        <div className='movies-container'>
            {movies && movies.length > 0 ? (
                movies.map((movie) => (
                    <div key={movie.imdbID} className='movie-main-row'>
                        <div className='col1'>
                            <img className='movie-image' src={movie.Poster} alt={movie.Title} />
                        </div>
                        <div className='col2'>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Type}</p>
                            <p>{movie.Year}</p>
                            <p>{movie.imdbID}</p>
                        </div>
                    </div>
                ))
            ) : (
                console.log('No movies to display')
            )}
        </div>
    );
}

export default Movie;
