import React from "react";

export default class Item extends React.Component {
  render () {

    //TODO verify syntax
    const {id, title} = this.props;
    return (
		  <li>Item id: {id}, the title: {title}</li>
    );
  }
}