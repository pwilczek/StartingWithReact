import React from "react";

import Left from "./left/Left";
import Right from "./right/Right";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      	<Left/>
      	<Right/>
      </div>
    );
  }
}