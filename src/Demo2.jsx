import React from "react";
import LoginPage from "./LoginPage2";
import HomePage from "./WelcomePage2";

class DemoByClass extends React.Component {
  state = {
    page: 1,
    name: "",
    password: "",
  };

  Login = () => {
    let s1 = this.state;
    s1.page = 1;
    s1.name = "";
    s1.password = "";
    this.setState(s1);
  };
  Home = (name) => {
    let s1 = this.state;
    s1.page = 2;
    s1.name = name;
    this.setState(s1);
  };
  render() {
    let { page, name, password } = this.state;
    return (
      <div>
        {page === 1 ? (
          <LoginPage name={name} password={password} home={this.Home} />
        ) : (
          <HomePage name={name} login={this.Login} />
        )}
      </div>
    );
  }
}

export default DemoByClass;
