import React, { useEffect, useState } from "react";

function FnComp() {
  const [count, setcount] = useState(0);
  const handleclick = () => {
    setcount(count + 1);
  };
  useEffect(() => {
    console.log("useEffect every time");
  });
  useEffect(() => {
    console.log("useEffect one time");
  }, []);
  useEffect(() => {
    console.log("useEffect when count change");
  }, [count]);
  return (
    <div>
      <h1>Function Component btn clicked {count} times</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

export default FnComp;
