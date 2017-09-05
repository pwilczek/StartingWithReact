import React from "react";

import Left from "./left/Left";
import Right from "./right/Right";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {message : "Initial message!"};
  }

  onMessageChange(message) {
    this.setState({message});
  }

  render() {
    return (
      <div>
        <Left message={this.state.message} handler={this.onMessageChange.bind(this)} />
        <Right message={this.state.message} />
      </div>
    );
  }
}