import React from 'react';
import PropTypes from 'prop-types';

function Movie(props){
    return (
        <div>
              <div className="container">
              <div className="row">
              <div className="col-md-3">
              {/* <div className="card" style={"width: 18rem;"}> */}
              <img className="card-img-top" src="kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt={props.poster}/>
              <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.overview}</p>
              </div>
        </div>
        {/* </div> */}
        </div>
        </div>
        </div>
    );

}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    poster: PropTypes.string
  };
export default Movie;