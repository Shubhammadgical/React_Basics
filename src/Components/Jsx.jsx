import React, { useState } from "react";
function Jsx() {
  const user = {
    firstName: "Shubham",
    lastName: "Chaurasia",
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const element = (
    <div>
      <br />
      <h1>Call Jsx with children</h1>
      <h3>Hello!</h3>
      <h3>Good to see you here.</h3>
      <br />
    </div>
  );

  function getGreeting(user) {
    if (user) {
      return (
        <h3>
          Hello, {formatName(user)}! {element}
        </h3>
      );
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div>
      <h1>JSX Conditional, {getGreeting(user)}</h1>
    </div>
  );
}

export default Jsx;
