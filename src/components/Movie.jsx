import React from 'react';

const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

    return (
        <div className="card movie" id = {id} style = {{margin: '0px'}}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={poster} style = {{height: '420px'}}/>
            </div>
            <div className="card-content" style = {{boxSizing: 'border-box'}}>
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p style = {{marginTop: '20px'}}><span className='left'>{year}</span><span className='right'>{type}</span></p>
            </div>
        </div>
    )
}

export default Movie;