import React, { Component } from "react";
import HoverCounter from "./HoverCounter";
import UpdatedComponent from "./WithCounter";
class ClickCounter extends Component {
  // state = { count: 0 };
  // increment = () => {
  //   let s1 = this.state;
  //   s1.count++;
  //   this.setState(s1);
  // };
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
