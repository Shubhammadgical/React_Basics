import React from "react";

class Home extends React.Component {
  state = {
    count: 0,
  };
  componentDidUpdate(props, state) {
    // console.log("preProps :", props.data, "currProps :", this.props.data);
    // console.log(state);
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("preProps :", preProps.data, "currProps :", this.props.data);
    console.log("preState", preState);
    return null;
  }
  render() {
    return (
      <div>
        <h1>preProps : {this.props.data}</h1>
        <h1>preState : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me for preState
        </button>
      </div>
    );
  }
}
export default Home;
