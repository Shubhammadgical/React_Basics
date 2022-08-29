import React from "react";
import Home from "./HomePage";
class GetSnapComp extends React.Component {
  state = {
    data: 0,
  };

  render() {
    return (
      <div>
        <h1>getSnapshotBefore</h1>
        <Home data={this.state.data} />
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          Click me for preProps
        </button>
      </div>
    );
  }
}
export default GetSnapComp;
