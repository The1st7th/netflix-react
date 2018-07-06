import React from 'react';
import Movie from './movie';
import PropTypes from 'prop-types';

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
  key = {props.Movielist[x].id}/>

  obj.push(temp);
}

return (
<div>
<div>{obj}</div>
</div>

);
}
Movielist.propTypes = {
    Movielist: PropTypes.array,
  };

export default Movielist;