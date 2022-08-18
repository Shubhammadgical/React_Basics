import React, { useEffect, useState } from "react";
function Login(props) {
  let home = props.home;
  let text = props.handleText;
  let name = props.name;
  let password = props.password;
  const handlePage = () => {
    home();
  };
  const handleText = (e) => {
    text(e);
  };
  useEffect(() => {
    console.log("Useeffect");
  }, [password]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={handleText}
        name="name"
        value={name}
      ></input>
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter your Password"
        onChange={handleText}
        name="password"
        value={password}
      ></input>
      <br />
      <br />
      <div>
        <button onClick={handlePage}>Login</button>
      </div>
    </div>
  );
}

export default Login;
