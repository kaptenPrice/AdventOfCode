import React, { useEffect, useState } from "react";

const DinnerTableComp = () => {
  const [highScore, setHighscore]=useState()
  useEffect(() => {

    sortAndPop(tablePart);
  }, []);
  const tablePart = {
    Alice: {
      Mallory: -94,
      Bob: 54,
      Carol: -81,
      David: -42,
      Eric: 89,
      Frank: -89,
      George: 97,
    },
    Bob: {
      Alice: 3,
      Carol: -70,
      David: -31,
      Eric: 72,
      Frank: -25,
      George: -95,
      Mallory: 11,
    },

    Carol: {
      Alice: -83,
      Bob: 8,
      David: 35,
      Eric: 10,
      Frank: 61,
      George: 10,
      Mallory: 29,
    },
    David: {
      Alice: 67,
      Bob: 25,
      Carol: 48,
      Eric: -65,
      Frank: 8,
      George: 84,
      Mallory: 9,
    },
    Eric: {
      Alice: -51,
      Bob: -39,
      Carol: 84,
      David: -98,
      Frank: -20,
      George: -6,
      Mallory: 60,
    },
    Frank: {
      Alice: 51,
      Bob: 79,
      Carol: 88,
      David: 33,
      Eric: 43,
      George: 77,
      Mallory: -3,
    },
    George: {
      Alice: -14,
      Bob: -12,
      Carol: -52,
      David: 14,
      Eric: -62,
      Frank: -18,
      Mallory: -17,
    },
    Mallory: {
      Alice: -36,
      Bob: 76,
      Carol: -34,
      David: 37,
      Eric: 40,
      Frank: 18,
      George: 7,
    },
  };
  // const tablePart = {
  //   Alice: {
  //     Bob: 54,
  //     David: -2,
  //     Carol: -79,
  //   },
  //   Bob: {
  //     Alice: 83,
  //     David: -63,
  //     Carol: -7,
  //   },
  //   David: {
  //     Alice: 46,
  //     Bob: -7,
  //     Carol: 41,
  //   },
  //   Carol: {
  //     Alice: -79,
  //     Bob: 60,
  //     David: 55,
  //   },
  // };

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
