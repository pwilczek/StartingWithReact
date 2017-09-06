import EventEmitter from "events"

class ItemsStore extends EventEmitter {
  constructor() {
    super();
    this.items = [
      {id: 1, title: "Some"},
      {id: 2, title: "Some other"}
    ];
  }

  load() {
    return this.items;
  }
}

export default new ItemsStore;