import React, { useState, useEffect } from "react";

const Shuffle = () => {
  const [list, setList] = useState([
    "orange",
    "yellow",
    "black",
    "white",
    "pink",
  ]);

  const handleShuffle = () => {
    const shArray = shuffleArray(list);
    setList(shArray);
  };
  function shuffleArray(array) {
    // Create a copy of the original array
    const shuffledArray = array.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }
  return (
    <div>
      {list.map((color) => {
        return (
          <>
            <span>{color}</span>
            <br />
          </>
        );
      })}
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
};

export default Shuffle;
