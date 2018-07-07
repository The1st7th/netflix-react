import React from 'react';
import Movie from './movie';
import PropTypes from 'prop-types';
import {Grid, Row, Col, code} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Movielist(props){
// var movies =[
//     {
//     title: "batman",
//     rating: "8",
//     poster: "example"
// },
// {
//     title: "batman",
//     rating: "8",
//     poster: "example"
// },
// {
//     title: "batman",
//     rating: "8",
//     poster: "example"
// }]
var obj=[];
for(var x = 0;x < props.Movielist.length;x++)
{
  var temp = <Movie title={props.Movielist[x].title}
  overview={props.Movielist[x].overview}
  poster={props.Movielist[x].poster}
  id = {props.Movielist[x].id}
  key ={props.Movielist[x].id}
  moviedel = {props.moviedelete}/>

  obj.push(temp);
}

//     <style jsx>{`
// .black{
//     background:black;
// }
// `}</style>

return (

<div>
<style jsx>{`
.grid{
background-color: black
}
    }
    `}</style>
<div>
<Grid>
  <Row className="show-grid">
<div>{obj}</div>
</Row>
</Grid>
</div>
</div>

);
}
Movielist.propTypes = {
    Movielist: PropTypes.array,
    moviedelete: PropTypes.func
  };

export default Movielist;