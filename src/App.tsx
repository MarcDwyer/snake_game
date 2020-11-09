import React, { useEffect, useState } from "react";
import "./App.css";

export const limit = 8;

function getXY() {
  const xy = [];
  const getArray = (n: number): boolean[] => {
    const result = new Array(n);
    result.fill(false);
    return result;
  };
  for (let x = 0; x < limit; x++) {
    xy.push(getArray(limit));
  }
  return xy;
}

function App() {
  const [xy, setXY] = useState(getXY());

  const setStart = () => {
    const start = Math.floor((xy.length - 1) / 2);
    const copy = [...xy];
    copy[start][1] = true;
    setXY(copy);
  };
  useEffect(() => {
    setStart();
  }, []);
  return (
    <div className="App">
      <div className="grid">
        {xy.map((y, x) => {
          return (
            <div key={x} className="row">
              {y.map((y, i) => {
                return (
                  <div key={i} className={`cell ${y ? "green" : ""}`}></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
