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
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Welcome {name}</h3>
      <div>
        <br />
        <button className="btn btn-primary" onClick={handlePage}>
          Back
        </button>
      </div>
    </div>
  );
}

export default HomePage;
