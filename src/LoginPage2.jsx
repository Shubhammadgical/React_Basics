import React from "react";
class Login extends React.Component {
  state = {
    name: this.props.name,
    password: this.props.password,
  };
  handlePage = () => {};
  handleText = (e) => {
    console.log(e);
    // if (e.currentTarget.name === "name") {
    //   s1.name = e.currentTarget.value;
    // } else {
    //   s1.password = e.currentTarget.value;
    // }
  };
  render() {
    let { name, password } = this.state;
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Login Page</h1>
        <br />
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={() => this.handleText()}
          name="name"
          value={name}
        ></input>
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={() => this.handleText()}
          name="password"
          value={password}
        ></input>
        <br />
        <br />
        <div>
          <button className="btn btn-primary" onClick={() => this.handlePage()}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
