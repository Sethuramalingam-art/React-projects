import "./styles.css";
import React, { useState, useEffect } from "react";
import Progress from "./Progress.js";

export default function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="App">
      <span>Progress Bar</span>
      <Progress value={value} />
    </div>
  );
}
