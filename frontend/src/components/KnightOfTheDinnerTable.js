import React, { useEffect, useState } from "react";

const KnightOfTheDinnerTable = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3008/");
      const data = await res.json();
      setData(data.inputData);
    } catch (error) {
      console.log("error, ", error);
    }
  };
  

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <h2> --- Day 13: Knights of the Dinner Table ---</h2>
      <div>{}</div>
    </div>
  );
};

export default KnightOfTheDinnerTable;
