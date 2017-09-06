import dispatcher from "../Dispatcher"

export function createItem(id, title) {
  dispatcher.dispatch({
    type: "NEW_ITEM",
    id, title
  });
}