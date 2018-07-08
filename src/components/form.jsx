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
  <p>
    copy paste this in the forms</p>
    <p>The Shawshank Redemption</p>
    <p>Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.</p>
    <p>https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg</p>
    <p> the GodFather </p>
    <p> Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p>
    <p>https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg</p>
    <p> Your Name </p>
    <p>High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.</p>
    <p>https://image.tmdb.org/t/p/w500/xq1Ugd62d23K2knRUx6xxuALTZB.jpg</p>
</div>
    );
}
NewMovie.propTypes = {
    movieadd: PropTypes.func
  };
export default NewMovie;