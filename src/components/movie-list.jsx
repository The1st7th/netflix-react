import React from 'react';
import Movie from './movie';

function Movielist(){
var movies =[
    {
    title: "batman",
    rating: "8",
    poster: "example"
},
{
    title: "batman",
    rating: "8",
    poster: "example"
},
{
    title: "batman",
    rating: "8",
    poster: "example"
}]
var obj=[];
for(var x = 0;x < 3;x++)
{
  var temp = <Movie title={movies[x].title}
  rating={movies[x].rating}
  poster={movies[x].poster}
  key={x}/>

  obj.push(temp);
}

return (
<div>
<div>{obj}</div>
</div>

);
}
export default Movielist;