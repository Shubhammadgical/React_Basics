import React, { useEffect, useState } from "react";

function Hooks() {
  const [count, setcount] = useState(0);
  const handleclick = () => {
    setcount(count + 1);
  };
  useEffect(() => {
    console.log("useeffect");
  }, [count]);
  return (
    <div>
      <h1>Function Component btn clicked {count} times</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

export default Hooks;
