import React, { Component } from 'react';
import ArraySort from 'array-sort';
import MovieItem from './MovieItem';
import '../public/style.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    if (props.movies.length === 0) {
      this.state = {
        movies: props.movies,
        isMovieListEmpty: true,
      };
    } else {
      this.state = {
        movies: props.movies,
        isMovieListEmpty: false,
      };
    }
    // console.log('constructor');
    // console.log(this.state.isMovieListEmpty);
    this.sortBySelectedMethod = this.sortBySelectedMethod.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movies.length === 0) {
      this.setState({
        movies: nextProps.movies,
        isMovieListEmpty: true,
      });
    } else {
      this.setState({
        movies: nextProps.movies,
        isMovieListEmpty: false,
      });
    }
    // console.log('componentWillReceiveProps');
    // console.log(this.state.isMovieListEmpty);
  }

  sortBySelectedMethod(e) {
    // console.log('soring movie list--------------->');
    let sortedMovieList = [];
    switch (e.target.value) {
      case 'Alphabetically':
        // console.log(e.target.value);
        sortedMovieList = ArraySort(this.state.movies, 'Title');
        this.setState({
          movies: sortedMovieList,
        });
        break;
      case 'Year':
        // console.log(e.target.value);
        sortedMovieList = ArraySort(this.state.movies, 'Year', { reverse: true });
        this.setState({
          movies: sortedMovieList,
        });
        break;
      case 'Rating':
        // console.log(e.target.value);
        sortedMovieList = ArraySort(this.state.movies, 'imdbRating', { reverse: true });
        this.setState({
          movies: sortedMovieList,
        });
        break;
      default:
        return null;
    }
    return null;
  }

  render() {
    const isMovieListEmpty = this.state.isMovieListEmpty;
    // console.log('rending--------->');
    // console.log(isMovieListEmpty);
    let ButtonForClear = null;
    if (isMovieListEmpty === true) {
      ButtonForClear = (<button
        className="btn btn-warning hidden"
        onClick={this.props.clearAllMovies}
      >Clear</button>);
    } else {
      ButtonForClear = (<button
        className="btn btn-warning"
        onClick={this.props.clearAllMovies}
      >Clear</button>);
    }
    const movies = this.state.movies;
    // console.log('rendering movie list--------------->');
    // console.log(movies);
    if (movies !== undefined && movies !== null && movies !== '' && movies !== []) {
      return (
        <div>
          <div className="row dropDownMenu">
            <div className="col-xs-3 dropDownMenu1">Favourites</div>
            <div className="form-group col-xs-9 dropDownMenu2">
              <label className="dropDownMenu_label" htmlFor="sortingMethods">
                Sort:&nbsp;&nbsp;
              </label>
              <select
                className="form-control dropDownMenu_select"
                id="sortingMethods"
                onClick={this.sortBySelectedMethod}
              >
                <option>Alphabetically</option>
                <option>Year</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
          <ul className="list-group">
            {movies.map(movie => <MovieItem
              key={movie.imdbID}
              imdbID={movie.imdbID}
              Title={movie.Title}
              Year={movie.Year}
              imdbRating={movie.imdbRating}
              rmMovie={this.props.rmMovie}
            />)}
          </ul>
          <div className="btnForClearAllMovies">
            {ButtonForClear}
          </div>
          <hr />
        </div>
      );
    } else {
      // console.log('empty movies!');
      return null;
    }
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  rmMovie: React.PropTypes.func.isRequired,
  clearAllMovies: React.PropTypes.func.isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
