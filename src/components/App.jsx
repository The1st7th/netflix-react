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
    }
    addmovie(newMovie){
      
      let newMovielist = this.state.Movielist.slice();
      newMovielist.push(newMovie);
      this.setState({Movielist:newMovielist},()=>{console.log(this.state.Movielist);});
    }

    render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movies' render={()=><Movielist Movielist={this.state.Movielist} />} />
          <Route path='/newmovie' render={()=><NewMovie movieadd={this.addmovie} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
  }
  
  export default App