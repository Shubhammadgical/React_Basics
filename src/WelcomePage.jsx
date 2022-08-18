import React, { useEffect, useState } from "react";
function HomePage(props) {
  let login = props.login;
  let name = props.name;
  let setpassword = props.setpassword;
  let setname = props.setname;
  const handlePage = () => {
    login();
    setname("");
    setpassword("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Welcome {name}</h3>
      <div>
        <button onClick={handlePage}>Back</button>
      </div>
    </div>
  );
}

export default HomePage;
