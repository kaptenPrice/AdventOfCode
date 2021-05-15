import React, { useEffect } from "react";

const Solution1 = () => {
  useEffect(() => {
    addAllConnections();
    // sortArray(adj);
  }, []);
  const persons = ["Alice", "Bob", "Carol", "David"];
  // const persons = [
  //   "Alice",
  //   "Bob ",
  //   "Carol ",
  //   "David ",
  //   "Eric ",
  //   "Frank ",
  //   "George",
  //   "Mallory ",
  // ];
  const V = persons.length;
  let adj = new Array(V);
  //create matris (lenght * length)
  for (let i = 0; i < V; i++) {
    adj[i] = [];
  }
  const addNeighbors = (adj, person, neighbor, hapiness) => {
    adj[person].push([neighbor, hapiness]);
    adj[neighbor].push([person, hapiness]);
    return adj;
  };
  const addAllConnections = () => {
    adj = addNeighbors(adj, "0", "1", 54);
    adj = addNeighbors(adj, "0", "2", -2);
    adj = addNeighbors(adj, "0", "3", -79);
    adj = addNeighbors(adj, "1", "0", 83);
    adj = addNeighbors(adj, "1", "2", -63);
    adj = addNeighbors(adj, "1", "3", -7);
    adj = addNeighbors(adj, "2", "0", 46);
    adj = addNeighbors(adj, "2", "1", -7);
    adj = addNeighbors(adj, "2", "3", 41);
    adj = addNeighbors(adj, "3", "0", -79);
    adj = addNeighbors(adj, "3", "1", 60);
    adj = addNeighbors(adj, "3", "2", 55);

    return adj;
  };
  const testRes = addAllConnections();

  let v = 0;
  let w = 0;
  let totalHapiness = 0;
  for (let i = 0; i < testRes.length; i++) {
    console.log("Parent : ", persons[i]);
    for (let j = 0; j < testRes[i].length; j++) {
      v = testRes[i][j][0];
      w = testRes[i][j][1];


      console.log(`        connected to ${v} with  hapiness = ${w}`);
      // console.log(
      //   "Nu är v: " + v + "och då är sammanslagen happiness: " + totalHapiness
      // );
    }

    //  adj[i].pop(adj[i].length - 1);
  }

  // const addAllConnections = () => {
  //   adj = addEdge(adj, 0, 1, 54);
  //   adj = addEdge(adj, 0, 2, -81);
  //   adj = addEdge(adj, 0, 3, -42);
  //   adj = addEdge(adj, 0, 4, 89);
  //   adj = addEdge(adj, 0, 5, -89);
  //   adj = addEdge(adj, 0, 6, 97);
  //   adj = addEdge(adj, 0, 7, -94);

  //   adj = addEdge(adj, 1, 0, 3);
  //   adj = addEdge(adj, 1, 2, -70);
  //   adj = addEdge(adj, 1, 3, -31);
  //   adj = addEdge(adj, 1, 4, 72);
  //   adj = addEdge(adj, 1, 5, -25);
  //   adj = addEdge(adj, 1, 6, -95);
  //   adj = addEdge(adj, 1, 7, 11);

  //   adj = addEdge(adj, 2, 0, -83);
  //   adj = addEdge(adj, 2, 1, 8);
  //   adj = addEdge(adj, 2, 3, 35);
  //   adj = addEdge(adj, 2, 4, 10);
  //   adj = addEdge(adj, 2, 5, 61);
  //   adj = addEdge(adj, 2, 6, 10);
  //   adj = addEdge(adj, 2, 7, 29);

  //   adj = addEdge(adj, 3, 0, 67);
  //   adj = addEdge(adj, 3, 1, 25);
  //   adj = addEdge(adj, 3, 2, 48);
  //   adj = addEdge(adj, 3, 4, -65);
  //   adj = addEdge(adj, 3, 5, 8);
  //   adj = addEdge(adj, 3, 6, 84);
  //   adj = addEdge(adj, 3, 7, 9);

  //   adj = addEdge(adj, 4, 0, -51);
  //   adj = addEdge(adj, 4, 1, -39);
  //   adj = addEdge(adj, 4, 2, 84);
  //   adj = addEdge(adj, 4, 3, -98);
  //   adj = addEdge(adj, 4, 5, -20);
  //   adj = addEdge(adj, 4, 6, -6);
  //   adj = addEdge(adj, 4, 7, 60);
  //   adj = addEdge(adj, 5, 0, 51);
  //   adj = addEdge(adj, 5, 1, 79);
  //   adj = addEdge(adj, 5, 2, 88);
  //   adj = addEdge(adj, 5, 3, 33);
  //   adj = addEdge(adj, 5, 4, 43);
  //   adj = addEdge(adj, 5, 6, 77);
  //   adj = addEdge(adj, 5, 7, -3);
  //   adj = addEdge(adj, 6, 0, -14);
  //   adj = addEdge(adj, 6, 1, -12);
  //   adj = addEdge(adj, 6, 2, -52);
  //   adj = addEdge(adj, 6, 3, 14);
  //   adj = addEdge(adj, 6, 4, -62);
  //   adj = addEdge(adj, 6, 5, -18);
  //   adj = addEdge(adj, 6, 7, -17);
  //   adj = addEdge(adj, 7, 0, -36);
  //   adj = addEdge(adj, 7, 1, 76);
  //   adj = addEdge(adj, 7, 2, -34);
  //   adj = addEdge(adj, 7, 3, 37);
  //   adj = addEdge(adj, 7, 4, 40);
  //   adj = addEdge(adj, 7, 5, 18);
  //   adj = addEdge(adj, 7, 6, 7);
  // };
  /* const sortArray = (adj) => {
    let res = [];

    for (let i = 0; i < adj.length; i++) {
      res.push(
        adj[i].sort((a, b) => {
          return b[1] - a[1];
        })
      );
      // res = adj.flatMap((v, i) => adj.slice(i + 1).map((w) => v + " " + w));

      //  adj[i].pop(adj[i].length - 1);
    }
    console.log(res);
    // for (let i = 0; i < res.length; i++) {
    //   console.log("RESULT FÖRSTA : ", res[i]);
    //   for (let j = 0; j < res[i].length; i++) {
    //     console.log("RESULTAT I INRE: ", res[i][j]);
    //   }
    // }
    // let result = 0;

    // res.map((a) => (result += a[0][1] + a[1][1]));
    // console.log(result);
  };*/
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
        Dinner table
      </h1>
    </>
  );
};

export default Solution1;
