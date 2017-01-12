import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      year: this.props.year,
      rating: this.props.rating,
    };
    // this.removeMovie = this.removeMovie.bind(this);
  }

  // removeMovie() {
  //   console.log('The movie to remove:' + this.state.id);
  // }

  render() {
    return (
      <li>
        {this.props.id}&nbsp;&nbsp;{this.props.title}({this.props.year})
        &nbsp;&nbsp;{this.props.rating}&nbsp;&nbsp;
        <button id={this.props.id} onClick={this.props.rmMovie}>REMOVE</button>
      </li>
    );
  }
}

MovieItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  year: React.PropTypes.string,
  rating: React.PropTypes.string,
  rmMovie: React.PropTypes.func.isRequired,
};

MovieItem.defaultProps = {
  year: '0000',
  rating: '0',
};

export default MovieItem;
