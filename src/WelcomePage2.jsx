import React, { useEffect, useState } from "react";
class HomePage extends React.Component {
  state = { name: this.props.name };
  handlePage = () => {
    this.props.login();
  };
  render() {
    let { name } = this.state;
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h3>Welcome {name}</h3>
        <div>
          <br />
          <button className="btn btn-primary" onClick={() => this.handlePage()}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
