import './Main.css';
import Movies from '../Movies';
import React from 'react';
import SearchMovie from '../SearchMovie';

class Main extends React.Component {
    state = {
        movies: []
    }
    
    componentDidMount () {
        this.fetchFunction('Tom and Jerry','movie')
    }

    fetchFunction (title,type) {
        fetch(`https://www.omdbapi.com/?apikey=85096689&s=${title}&type=${type}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
            .catch((error) => {
                console.log(error.type)
            })
    }

    searchMovies = (data,type) => {
        if(type === 'all')
            type = '';
        this.fetchFunction(data,type);
    }


    render() {
        return <main className="content container" style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <SearchMovie data = {this.searchMovies}/>
            {(this.state.movies) ? (<Movies movies = {this.state.movies}/>):
                <div class="preloader-wrapper big active" style = {{margin: 'auto'}}>
                    <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
          }
        </main>
    }
}

export default Main;