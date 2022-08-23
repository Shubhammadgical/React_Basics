import React, { useState } from "react";

function MultiComp() {
  const [count, setcount] = useState(0);
  const handleclick = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>1 Function Component btn clicked {count} times</h1>
      <button onClick={handleclick}>Click me</button>
      <SecComp count={count} />
      <ThirdComp count={count} />
      {/* {SecComp(count)} */}
    </div>
  );
}

function SecComp(props) {
  const count = props.count;
  return (
    <div>
      <h1>2 Function Component count : {count}</h1>
    </div>
  );
}

function ThirdComp(props) {
  const count = props.count;
  return (
    <div>
      <h1>3 Function Component count : {count}</h1>
    </div>
  );
}

export default MultiComp;
