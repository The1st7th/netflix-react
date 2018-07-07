import React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

function NewMovie(props){
    let _title = "";
    let _overview = "";
    let _poster= "";

    function onSubmit(e){
        e.preventDefault();
        // console.log(_title);
        // console.log(_overview);
        // console.log(_poster);
        props.movieadd({title: _title, overview:_overview, poster:_poster, id: v4()});
        document.getElementById("reset").reset();
        }

    return (
        <div>
        <form id ="reset">
  <FormGroup >
    <FormControl type="text" id="title" placeholder="title" onChange={(e)=>{_title=e.target.value}} />
  </FormGroup>
  <FormGroup>
    <FormControl type="text" placeholder="overview" onChange={(e)=>{_overview=e.target.value}} />
  </FormGroup>
  <FormGroup>
    <FormControl type="text" placeholder="poster" onChange = {(e)=>{_poster=e.target.value}} />
  </FormGroup>

  <button onClick ={(e) =>onSubmit(e)}>submit</button>
</form>
<Link to ='/movies'>
    <div className ="newmovies">
    <button type ="button" className="btn btn-danger" >Movie List</button>
  </div>
  </Link>
</div>
    );
}
NewMovie.propTypes = {
    movieadd: PropTypes.func
  };
export default NewMovie;