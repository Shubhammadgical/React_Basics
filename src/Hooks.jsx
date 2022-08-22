import React, { useEffect, useState } from "react";

function Hooks() {
  const [count, setcount] = useState(0);
  const handleclick = () => {
    setcount(count + 1);
  };
  useEffect(() => {
    console.log("useeffect for every time");
  });
  useEffect(() => {
    console.log("useeffect one time after render");
  }, []);
  useEffect(() => {
    console.log("useeffect when count change");
  }, [count]);
  return (
    <div>
      <h1>Btn clicked {count} times</h1>
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

export default Hooks;
