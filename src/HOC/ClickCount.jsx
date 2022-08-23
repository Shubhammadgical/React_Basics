import React, { Component } from "react";
import HoverCounter from "./HoverCounter";
import UpdatedComponent from "./WithCounter";
class ClickCounter extends Component {
  render() {
    let { count, increment } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <button onClick={increment}>Clicked {count} times</button>
        <br />
        <br />
        <HoverCounter />
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter, 2);
