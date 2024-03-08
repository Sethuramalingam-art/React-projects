import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const filledArray = Array(7).fill(0);
  const [order, setOrder] = useState<Array<any>>([]);
  const handleClick = (event: any) => {
    if (!event.target.classList.contains("green")) {
      event.target.classList.add("green");
      setOrder((prev) => [...prev, event.target]);
    }
  };

  if (order.length === filledArray.length) {
    order.forEach((div, i) =>
      setTimeout(() => div.classList.remove("green"), i * 1000),
    );
    setOrder([]);
  }
  return (
    <>
      {" "}
      <div className="parentContainer">
        {filledArray.map((UI, index) => {
          return (
            <div className="box" key={index} onClick={handleClick}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
