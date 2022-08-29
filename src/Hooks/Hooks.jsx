import React, { useEffect, useState, useRef } from "react";

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

  const ref = useRef(""); //use to stop re-render
  const submit = () => {
    console.log(ref.current.value);
  };
  return (
    <div>
      <h1>Btn clicked {count} times</h1>
      <button onClick={handleclick}>Click me</button>
      <br />
      <br />
      <input type="textbox" ref={ref}></input>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Hooks;
