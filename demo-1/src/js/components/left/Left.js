import React from "react";

import * as ItemActions from "../../actions/ItemActions";


export default class Left extends React.Component {

  constructor() {
    super();
    this.state = {
      id: "pass your id",
      title: "pass your title"
    }
  }

  submit() {
    const {id, title} = this.state
    ItemActions.createItem(id, title);
  }

  updateId(event) {
      this.setState({id: event.target.value});
  }

  updateTitle(event) {
      this.setState({title: event.target.value});
  }

  handle(element) {
    this.props.handler(element.target.value);
  }

  render() {
    return (
      <div>
        <div>It's left !</div>
        <input type="text" onChange={this.handle.bind(this)} value={this.props.message} />
        <div>Fill your items!</div>
        <div>
          ID: <input type="text" onChange={this.updateId.bind(this)} value={this.state.id}/>
          Title: <input type="text" onChange={this.updateTitle.bind(this)} value={this.state.title}/>
          <input type="button" value="submit!" onClick={this.submit.bind(this)} />
        </div>
      </div>
    );
  }
}