import React from "react";

import Item from "../item/Item";
import ItemsStore from "../../stores/ItemsStore";

export default class Right extends React.Component {
  constructor() {
    super();
    this.updateItems = this.updateItems.bind(this);
    this.state = { items: ItemsStore.load() };
  }

  componentWillMount() {
    ItemsStore.on("NEW_ITEM_ADDED", this.updateItems);
  }

  componentWillUnmount() {
    itemStore.removeListener("NEW_ITEM_ADDED", this.updateItems);
  }

  updateItems() {
    this.setState({
      items: ItemsStore.load()
    });
  }

  render() {
    //
    const { items } = this.state;
    const result = items.map((item) => {
      return <Item key={item.id} {...item} />
    });
    //
    return (
        <div>
          <div>And the message is {this.props.message}</div>
            <ul>{result}</ul>
        </div>
    );
  }
}