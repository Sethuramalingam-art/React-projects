import React, { useState, useEffect } from "react";
const Progress = ({ value = 0 }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={percent.toFixed()}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${percent}%` }}
        // style={{
        //   transform: `scaleX(${percent / 100})`,
        //   transformOrigin: "left",
        // }}
      />
    </div>
  );
};

export default Progress;
