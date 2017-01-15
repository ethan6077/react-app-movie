import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import MovieMatchedItem from './MovieMatchedItem';

class MovieMatchedList extends Component {
  // props.tempTitle is for MovieMatchedList to search from omdbapi
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tempTitle: this.props.tempTitle,
  //   };
  // }

  render() {
    const { matchedMovieFetch } = this.props;
    if (matchedMovieFetch.pending) {
      return null;
    } else if (matchedMovieFetch.rejected) {
      return null;
    } else if (matchedMovieFetch.fulfilled) {
      const movies = matchedMovieFetch.value.Search;
      // console.log(movies);
      if (movies !== undefined && movies !== null && movies !== '' && movies !== []) {
        return (
          <div>
            <ul className="list-group">
              {movies.map(movie => <MovieMatchedItem
                key={movie.imdbID}
                imdbID={movie.imdbID}
                Title={movie.Title}
                addMovie={this.props.addMovie}
              />)}
            </ul>
            <hr />
          </div>
        );
      } else {
        console.log('Input is empty or nothing is found!');
      }
    }
    return null;
  }
}

MovieMatchedList.propTypes = {
  // tempTitle: React.PropTypes.string.isRequired,
  addMovie: React.PropTypes.func.isRequired,
};

// export default MovieMatchedList;
export default connect(props => ({
  matchedMovieFetch: {
    url: `http://www.omdbapi.com/?s=${props.tempTitle}`,
  },
}))(MovieMatchedList);
