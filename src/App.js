import "./styles.css";

import React from "react";
import { useState } from "react";
export default function App() {
  const [count, updatecount] = useState(0);
  const inc = () => {
    if (count < 10) {
      updatecount(count + 1);
    }
  };
  const dec = () => {
    if (count > 0) {
      updatecount(count - 1);
    } else {
      alert("value should not be less than zero");
    }
  };
  return (
    <div className="App">
      <h1>count {count} </h1>
      <button style={{ marginRight: "80px" }} onClick={inc}>
        {" "}
        inc{" "}
      </button>
      <button onClick={dec}> dec </button>
    </div>
  );
}
