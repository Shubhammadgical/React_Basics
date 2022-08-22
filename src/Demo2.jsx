import { render } from "@testing-library/react";
import React, { useState } from "react";
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
    this.setstate(s1);
  };
  Home = () => {
    let s1 = this.state;
    s1.page = 2;
    this.setstate(s1);
  };
  render() {
    let { page, name, password } = this.state;
    return (
      <div>
        {page === 1 ? (
          <LoginPage name={name} password={password} />
        ) : (
          <HomePage name={name} />
        )}
      </div>
    );
  }
}

export default DemoByClass;
