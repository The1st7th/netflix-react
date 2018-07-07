import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Main from './main';
import Movielist from './movie-list';
import NewMovie from './form';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        Movielist:[]
      }
      this.addmovie = this.addmovie.bind(this);
      this.deletemovie =this.deletemovie.bind(this);
    }
    addmovie(newMovie){
      console.log(newMovie);
      let newMovielist = this.state.Movielist.slice();
      newMovielist.push(newMovie);
      this.setState({Movielist:newMovielist},()=>{console.log(this.state.Movielist);});
    }

    deletemovie(id){
      
      
    
      let newMovielist = this.state.Movielist.slice();
      console.log(newMovielist);
      for (var x = 0; x < newMovielist.length ;x++){
        if ( id ==  newMovielist[x].id){
         newMovielist.splice(x,1);
        }
      }
      this.setState({Movielist:newMovielist});
    }

    render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movies' render={()=><Movielist Movielist={this.state.Movielist} moviedelete={this.deletemovie}  />} />
          <Route path='/newmovie' render={()=><NewMovie movieadd={this.addmovie} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
  }
  
  export default App