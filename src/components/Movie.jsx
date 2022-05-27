import React from 'react';
import './Movie.css'

const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div className="card movie" id = {id} style = {{margin: '0px', color: 'white'}}>
            <div className="card-image waves-effect waves-block waves-light">
                <div className="container1">
                    <img className="activator" src={poster} style = {{justifyContent: 'center'}}/>
                </div>
            </div>
            <div className="container2">
                <div className="card-content" style = {{boxSizing: 'border-box', padding: '0px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="card-title activator" style = {{color: 'white', fontSize: '18px'}}>{title}</span>
                </div>
                <p style = {{margin: '0px'}}><span className='left'>{year}</span><span className='right'>{type}</span></p>
            </div>
        </div>
    )
}

export default Movie;