import React from "react";
import User from "./User";
class CompDidUnmou extends React.Component {
  state = {
    show: true,
  };

  render() {
    return (
      <div>
        <h1>ComponentWillUnmount</h1>
        {this.state.show ? <User /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Delete user
        </button>
      </div>
    );
  }
}
export default CompDidUnmou;
