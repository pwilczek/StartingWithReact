import EventEmitter from "events"
import dispatcher from "../Dispatcher"

class ItemsStore extends EventEmitter {
  constructor() {
    super();
    this.items = [
      {id: 1, title: "Some"},
      {id: 2, title: "Some other"}
    ];
  }

  actionListener(action) {
    switch(action.type) {
      case "NEW_ITEM": {
        this.newItem(action.id, action.title);
      }
    }
  }

  load() {
    return this.items;
  }

  newItem(id, title) {
    this.items.push({id, title});
    this.emit("NEW_ITEM_ADDED");
  }
}

const itemStore = new ItemsStore;
dispatcher.register(itemStore.actionListener.bind(itemStore));
export default itemStore;
