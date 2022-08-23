import React, { createContext, useState, useContext } from "react";
const UserContext = createContext();
function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  const update = (name) => {
    setUser(name);
  };
  return (
    <UserContext.Provider value={{ user, update }}>
      <h1>Component 1</h1>
      <h2>{`Hello ${user}!`}</h2>
      <Component2 />
    </UserContext.Provider>
  );
}
function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const data = useContext(UserContext);
  data.update("Shubham");
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${data.user}!`}</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const data = useContext(UserContext);
  data.update("Shubham Chaurasia");
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${data.user} again!`}</h2>
    </>
  );
}

export default Component1;
