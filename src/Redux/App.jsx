import React from "react";
import { incNumber } from "./Actions";
import { decNumber } from "./Actions";
import { useSelector, useDispatch } from "react-redux/es/exports";

const ReduxMainPage = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Increment 5 / Decrement 2 counter</h1>
      <h4>Using React and Redux</h4>

      <div className="row">
        <div className="col-3"></div>
        <div
          className="col-2"
          style={{ backgroundColor: "lightblue" }}
          onClick={() => dispatch(decNumber(2))}
        >
          -
        </div>
        <div className="col-2" style={{ backgroundColor: "lightgray" }}>
          {myState}
        </div>
        <div
          className="col-2"
          style={{ backgroundColor: "lightblue" }}
          onClick={() => dispatch(incNumber(5))}
        >
          +
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
export default ReduxMainPage;
