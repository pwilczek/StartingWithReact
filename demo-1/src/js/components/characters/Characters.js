import React from "react";

export default class Characters extends React.Component {
  render() {
    return (
      <div>
        <h2>Characters List</h2>
        <h4>parameter: {this.props.params.character}</h4>
      </div>
    );
  }
}