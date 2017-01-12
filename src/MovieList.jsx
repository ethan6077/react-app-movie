import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
    };
  }

  render() {
    const movies = this.state.movies;
    return (
      <ul>
        {movies.map(movie => <MovieItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          rmMovie={this.props.rmMovie}
        />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  rmMovie: React.PropTypes.func.isRequired,
};

export default MovieList;
