import React, { useEffect, useState } from "react";
function Login(props) {
  let home = props.home;
  let text = props.handleText;
  let name = props.name;
  let password = props.password;
  const handlePage = () => {
    if (name !== "" && password !== "") {
      home();
    } else {
      alert("Please fill both name and password.");
    }
  };
  const handleText = (e) => {
    text(e);
  };
  useEffect(() => {
    console.log("Useeffect");
  }, [password]);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Login Page</h1>
      <br />
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
        <button className="btn btn-primary" onClick={handlePage}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
