import React from 'react';
import MovieList from './MovieList';
// import logo from './logo.svg';
// import './App.css';

const moviesRawData = [
  { id: '001', title: 'Chicken Burger', year: '1973', rating: '9.3' },
  { id: '002', title: 'Beef Burger', year: '1999', rating: '4.5' },
  { id: '003', title: 'Vegetable Sandwich', year: '2014', rating: '8.3' },
  { id: '004', title: 'Fried Rice', year: '2016', rating: '7.8' },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Movie Title',
      movies: moviesRawData,
    };
    this.update = this.update.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.rmMovie = this.rmMovie.bind(this);
  }

  update(e) {
    // call movie api
    this.setState({
      title: e.target.value,
    });

    const ENTER_KEY = 13;
    if (e.keyCode === ENTER_KEY) {
      const movieJson = { id: '000', title: e.target.value, year: '0000', rating: '0.00' };
      this.addMovie(movieJson);
    }
  }

  addMovie(mJson) {
    // interact with LocalStorage
    console.log('Movie to add: ' + mJson.title);
    this.state.movies.push(mJson);
    this.setState({
      title: 'Movie Title',
      movies: this.state.movies,
    });
  }

  rmMovie(e) {
    // interact with LocalStorage
    console.log('Movie to remove------------> ');
    console.log(e.target.id);
    const mvIndexToRm = moviesRawData.findIndex(
      (mv) => { if (mv.id === e.target.id) return mv; return null; });
    if (mvIndexToRm !== null) {
      console.log(mvIndexToRm);
      this.state.movies.splice(mvIndexToRm, 1);
    }
    this.setState({
      title: 'Movie Title',
      movies: this.state.movies,
    });
  }

  render() {
    return (
      <div>
        <h1>Movie App</h1>
        <input className="form-control inputlg" onKeyDown={this.update} />
        <p>{this.state.title}</p>
        <hr />
        <MovieList movies={this.state.movies} rmMovie={this.rmMovie} />
      </div>
    );
  }
}

export default App;
