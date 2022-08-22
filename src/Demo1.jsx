import React, { useState } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./WelcomePage";
const MainPage = () => {
  const [state, setstate] = useState(1);
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const handleText = (e) => {
    if (e.currentTarget.name === "name") {
      setname(e.currentTarget.value);
    } else {
      setpassword(e.currentTarget.value);
    }
  };

  const Login = () => {
    setstate(1);
  };
  const Home = () => {
    setstate(2);
  };
  return (
    <div>
      {state === 1 ? (
        <LoginPage
          home={Home}
          handleText={handleText}
          name={name}
          password={password}
        />
      ) : (
        <HomePage
          login={Login}
          name={name}
          setpassword={setpassword}
          setname={setname}
        />
      )}
    </div>
  );
};

export default MainPage;
