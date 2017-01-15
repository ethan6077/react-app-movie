import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbID: this.props.imdbID,
      Title: this.props.Title,
      Year: this.props.Year,
      imdbRating: this.props.imdbRating,
    };
    // this.removeMovie = this.removeMovie.bind(this);
  }

  // removeMovie() {
  //   console.log('The movie to remove:' + this.state.imdbID);
  // }

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-8">
            {this.props.Title}({this.props.Year})
            <br />
            IMDB:&nbsp;{this.props.imdbRating}&nbsp;&nbsp;
          </div>
          <div className="col-xs-4">
            <button
              className="btn btn-danger"
              id={this.props.imdbID}
              onClick={this.props.rmMovie}
            >REMOVE</button>
          </div>
        </div>
      </li>
    );
  }
}

MovieItem.propTypes = {
  imdbID: React.PropTypes.string.isRequired,
  Title: React.PropTypes.string.isRequired,
  Year: React.PropTypes.string,
  imdbRating: React.PropTypes.string,
  rmMovie: React.PropTypes.func.isRequired,
};

MovieItem.defaultProps = {
  Year: '0000',
  imdbRating: '0',
};

export default MovieItem;
