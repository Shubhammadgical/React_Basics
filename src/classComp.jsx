import React from "react";

class ClassComp extends React.Component {
  state = {
    count: 0,
    show: true,
  };
  handleclick = () => {
    let s1 = this.state;
    s1.count++;
    this.setState(s1);
  };
  componentDidMount() {
    console.log("mount");
    // setTimeout(() => {
    //   this.setState({ count: 5 });
    // }, 1000);
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  //   console.log(prevState);
  // }
  componentDidUpdate() {
    console.log("update");
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    console.log("render");
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
