import React from "react";

function Concepts() {
  return (
    <div style={{ padding: "20px" }}>
      <a
        class="weatherwidget-io"
        href="https://forecast7.com/en/24d6080d83/satna/"
        data-label_1="SATNA"
        data-label_2="WEATHER"
        data-theme="original"
      >
        SATNA WEATHER
      </a>
      <h1>Basic Concepts of React </h1>
      <a href="/hooks">
        <h2>Hooks : useState, useEffect, useRef </h2>
      </a>
      <a href="/usecontext">
        <h2>UseContext </h2>
      </a>
      <a href="/usereducer">
        <h2>UseReducer </h2>
      </a>
      <a href="/usecallback">
        <h2>UseCallBack </h2>
      </a>
      <a href="/usememo">
        <h2>UseMemo </h2>
      </a>
      <a href="/useform">
        <h2>UseForm</h2>
      </a>
      <a href="/redux">
        <h2>Redux </h2>
      </a>
      <a href="/classcomp">
        <h2>Class Component, LifeCycle</h2>
      </a>
      <a href="/getsnapshotbeforeupdate">
        <h2>getSnapshotBeforeUpdate</h2>
      </a>
      <a href="/compdidunmount">
        <h2>ComponentWillUnmount</h2>
      </a>
      <a href="/fncomp">
        <h2>Function Component </h2>
      </a>
      <a href="/multicomp">
        <h2>Multi Component </h2>
      </a>
      <a href="/jsx">
        <h2>JSX </h2>
      </a>
      <a href="/clickcounter">
        <h2>Higher-Order-Component </h2>
      </a>
      <br />
      <br />
      <h1>Demo</h1>
      <a href="/demo1">
        <h2>By Function Component, props </h2>
      </a>
      <a href="/demo2">
        <h2>By Class Component, props </h2>
      </a>
      <a href="/quiz">
        <h2>Quiz</h2>
      </a>
    </div>
  );
}

export default Concepts;
