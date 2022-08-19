import React from "react";

class ClassComp extends React.Component {
  state = {
    count: 0,
  };
  handleclick = () => {
    let s1 = this.state;
    s1.count++;
    this.setState(s1);
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>Class Component btn clicked {count} times</h1>
        <button onClick={() => this.handleclick()}>Click me</button>
      </div>
    );
  }
}
export default ClassComp;
