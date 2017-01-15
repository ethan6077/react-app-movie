import React, { Component } from 'react';

class MovieMatchedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbID: this.props.imdbID,
      Title: this.props.Title,
    };
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-8">
            {this.props.imdbID}&nbsp;&nbsp;{this.props.Title}
          </div>
          <div className="col-xs-4">
            <button
              className="btn btn-success"
              id={this.props.imdbID}
              onClick={this.props.addMovie}
            >ADD</button>
          </div>
        </div>
      </li>
    );
  }
}

MovieMatchedItem.propTypes = {
  imdbID: React.PropTypes.string.isRequired,
  Title: React.PropTypes.string.isRequired,
  addMovie: React.PropTypes.func.isRequired,
};

export default MovieMatchedItem;
