import React from "react";

export default class Left extends React.Component {

  handle(element) {
    this.props.handler(element.target.value);
  }

  render() {
    return (
      <div>
        <div>It's left !</div>
        <input type="text" onChange={this.handle.bind(this)} value={this.props.message}/>
      </div>
    );
  }
}