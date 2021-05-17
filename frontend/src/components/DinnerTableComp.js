import React, { useEffect, useState } from "react";

const DinnerTableComp = () => {
  const [highScore, setHighscore]=useState()
  useEffect(() => {

    sortAndPop(tablePart);
  }, []);
 
  const tablePart = {
    Alice: {
      Bob: 54,
      David: -2,
      Carol: -79,
    },
    Bob: {
      Alice: 83,
      David: -63,
      Carol: -7,
    },
    David: {
      Alice: 46,
      Bob: -7,
      Carol: 41,
    },
    Carol: {
      Alice: -79,
      Bob: 60,
      David: 55,
    },
  };

  const sortAndPop = (list) => {
    const resultList = Object.fromEntries(
      Object.entries(list).map(([name, neighbors]) => [
        name,
        Object.fromEntries(
          Object.entries(neighbors)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
        ),
      ])
    );
    setHighscore(
      Object.values(resultList).map((e) =>
        Object.values(e).reduce((sum, value) => sum + value)
      ).reduce((sum, value)=>sum+value)
    )
    console.log(resultList);
  };


  return (
    <>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Dinner table <br/>
        {highScore}
      </h1>
    </>
  );
};

export default DinnerTableComp;
