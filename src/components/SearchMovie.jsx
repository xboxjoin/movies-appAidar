import './SearchMovie.css'
import React from 'react';

class SearchMovie extends React.Component {

    state = {
        value: '',
        type: '',
    }

    handleChange = (evt) => {
        this.setState({value: evt.target.value})
    }

    handleSearch = () => {
        this.props.data(this.state.value,this.state.type)
    }

    handleyKey = (evt) => {
        this.handleSearch();
    }

    handleChangeType = (evt) => {
        this.setState({type: evt.target.name})
    }

    render() {
        return <div className ='search'>
                <div className="row" style = {{display: 'flex', alignItems: 'center', margin: '0px'}}>
                    <div className="input-field col s6" style = {{width: '90%', margin: '0px', marginBottom: '0px'}}>
                        <input placeholder = "Нужно ввести название"onKeyDown={this.handleyKey} style = {{margin: '0px', padding: '0px', marginBottom: '0px'}} value={this.state.value} onChange = {this.handleChange} id="first_name2" type="text" className="text"/>
                    </div>
                    
                    <a className="waves-effect waves-light btn-large" onClick = {this.handleSearch}>Search</a>
                </div>
                
                <div className='radios'>
                    <label>
                        <input name="all" type="radio" checked = {(this.state.type === 'all')} onClick = {this.handleChangeType}/>
                        <span>Показать все</span>
                    </label>
                    <label>
                        <input name="movie" type="radio" checked = {(this.state.type === 'movie')} onClick = {this.handleChangeType}/>
                        <span>Фильмы</span>
                    </label>                       
                    <label>
                        <input name="series" type="radio" checked = {(this.state.type === 'series')} onClick = {this.handleChangeType}/>
                        <span>Сериалы</span>
                    </label>
                    <label>
                        <input name="game" type="radio" checked = {(this.state.type === 'game')} onClick = {this.handleChangeType}/>
                        <span>Игры</span>
                    </label>
                </div>
        </div>
    }
}

export default SearchMovie;