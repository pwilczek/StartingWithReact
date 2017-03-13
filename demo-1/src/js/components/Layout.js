import React from "react";
import { Link } from "react-router";
import Shoutouts from "./shoutouts/Shoutouts";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {welcome: "Welcome to Star Wars Trivia!"};
  }
  
  render() {
    var ourStyleObject = {
      marginLeft: 30
    };
    
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <p class="navbar-brand">React! &nbsp;</p>
              <Link to="movies-list" class="btn btn-default navbar-btn">Movies</Link>
              <Link to="characters-list" class="btn btn-default navbar-btn">Characters</Link>
            </div>
            <p class="navbar-brand"> &nbsp; {this.state.welcome}</p>
          </div>
        </nav>
        <div class="row">
          <div class="col-sm-4" style={ourStyleObject}> 
            <div class="well">{this.props.children}</div> 
          </div>
          <div class="col-sm-4">
            <div class="well"><Shoutouts/></div> 
          </div>
        </div>
      </div>
    );
  }
}