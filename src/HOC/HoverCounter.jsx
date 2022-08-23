import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";
class HoverCounter extends Component {
  render() {
    let { count, increment } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <h2 onMouseOver={increment}>Hovered {count} times</h2>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCounter, 5);
