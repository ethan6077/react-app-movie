import React from 'react';
import NodeRestClient from 'node-rest-client';
import localStorage from 'localStorage';
import MovieList from './MovieList';
import MovieMatchedList from './MovieMatchedList';


// const moviesRawData = [
//   { imdbID: '001', Title: 'Chicken Burger', Year: '1973', imdbRating: '9.3' },
//   { imdbID: '002', Title: 'Beef Burger', Year: '1999', imdbRating: '4.5' },
//   { imdbID: '003', Title: 'Vegetable Sandwich', Year: '2014', imdbRating: '8.3' },
//   { imdbID: '004', Title: 'Fried Rice', Year: '2016', imdbRating: '7.8' },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    let moviesFromLocalStorage = '';
    let moviesJson = [];
    if (localStorage.getItem('movies') !== null) {
      moviesFromLocalStorage = localStorage.getItem('movies');
      moviesJson = JSON.parse(moviesFromLocalStorage);
    }
    this.state = {
      tempTitle: '',
      movies: moviesJson,
    };
    this.update = this.update.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.rmMovie = this.rmMovie.bind(this);
    this.clearAllMovies = this.clearAllMovies.bind(this);
  }

  update(e) {
    // call movie api
    this.setState({
      tempTitle: e.target.value,
    });
  }

  addMovie(e) {
    // get the movie detail from omdbapi
    console.log('Movie to add------------>');
    console.log(e.target.id);
    const Client = NodeRestClient.Client;
    const client = new Client();
    const imdbIdOfMovieToAdd = e.target.id;
    client.get(`http://www.omdbapi.com/?i=${imdbIdOfMovieToAdd}&r=json`, (res) => {
      console.log(res);
      const mJson = {
        imdbID: res.imdbID,
        Title: res.Title,
        Year: res.Year,
        imdbRating: res.imdbRating,
      };
      console.log(mJson);
      this.state.movies.push(mJson);
      // interact with localStorage
      localStorage.setItem('movies', JSON.stringify(this.state.movies));
      this.setState({
        tempTitle: '',
        movies: this.state.movies,
      });
      // clear the input DOM
      this.titleInput.value = '';
    });// end of client.get
  }

  rmMovie(e) {
    // console.log('Movie to remove------------>');
    // console.log(e.target.id);
    const mvIndexToRm = this.state.movies.findIndex(
      (mv) => { if (mv.imdbID === e.target.id) return mv; return null; });
    if (mvIndexToRm !== null) {
      // console.log(mvIndexToRm);
      this.state.movies.splice(mvIndexToRm, 1);
    }
    // interact with LocalStorage
    localStorage.setItem('movies', JSON.stringify(this.state.movies));
    this.setState({
      tempTitle: '',
      movies: this.state.movies,
    });
  }

  clearAllMovies() {
    // console.log('clearAllMovies---------->');
    // interact with LocalStorage
    localStorage.clear();
    this.state.movies.splice(0);
    this.setState({
      tempTitle: '',
      movies: this.state.movies,
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Movie App</h1>
        <h2 className="text-center">Author: Ethan Zhang</h2>
        <input
          type="text"
          className="form-control inputlg"
          onKeyDown={this.update}
          ref={(input) => { this.titleInput = input; }}
        />
        <MovieMatchedList
          tempTitle={this.state.tempTitle}
          addMovie={this.addMovie}
        />
        <MovieList
          movies={this.state.movies}
          rmMovie={this.rmMovie}
          clearAllMovies={this.clearAllMovies}
        />
      </div>
    );
  }
}

export default App;
