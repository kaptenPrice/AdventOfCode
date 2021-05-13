import React, { useEffect, useState } from "react";

const DinnerTable = () => {
  useEffect(() => {
    // addAllConnections();
    // printGraph(adj, V);
    // sortArray(adj);
    // removeLast(adj)
    sort(tablePart);
  }, []);

  //   const addAllConnections = () => {
  //     adj = addEdge(adj, 0, 1, 54);
  //     adj = addEdge(adj, 0, 2, -2);
  //     adj = addEdge(adj, 0, 3, -79);
  //     adj = addEdge(adj, 1, 0, 83);
  //     adj = addEdge(adj, 1, 2, -63);
  //     adj = addEdge(adj, 1, 3, -7);
  //     adj = addEdge(adj, 2, 0, 46);
  //     adj = addEdge(adj, 2, 1, -7);
  //     adj = addEdge(adj, 2, 3, 41);
  //     adj = addEdge(adj, 3, 0, -79);
  //     adj = addEdge(adj, 3, 1, 60);
  //     adj = addEdge(adj, 3, 2, 55);
  //   };

  const persons = ["Alice", "Bob", "David", "Carol"];

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

  /* const tablePart = {
      Alice: {
        Bob: 54,
        Carol: -81,
        David: -42,
        Eric: 89,
        Frank: -89,
        George: 97,
        Mallory: -94,
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
 */
  const sort = (adj) => {
    console.log("matris: ", adj);
    const resultList = Object.fromEntries(
      Object.entries(adj).map(([name, neighbors]) => [
        name,
        Object.fromEntries(
          Object.entries(neighbors)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2)
        ),
      ])
    );
    const res = Object.values(adj)
      .map((neighbors) => {
        const x = Object.values(neighbors)
          .sort((a, b) => b - a)
          .slice(0, 2);
        return x[0] + x[1];
      })
      .reduce((sum, value) => sum + value);
    /*     let sum = res[0];
    for (let i = 1; i < res.length; i++) {
        sum += res[i];
    } */

    // console.log(Object.values(adj));

    console.log("RESULT: ", res);
    console.log("TableSitting: ", resultList);
    // console.log(res.map((a) => (result += a[0][1] + a[1][1])));

    // for (let i = 0; i < adj.length; i++) {
    //   res.push(
    //     adj[i].sort((a, b) => {
    //       return b[1] - a[1];
    //     })
    //   );
    //   adj[i].pop(adj[i].length - 1);
    // }
    // console.log(res);
    // let result = 0;

    // console.log(res.map((a) => (result += a[0][1] + a[1][1])));
    // console.log(result);
  };

  //   const addEdge = (list, person, neighbor, hapiness) => {
  //     list[person].push([neighbor, hapiness]);
  //     // list[neighbor].push([person, hapiness])
  //     return list;
  //   };

  //   const printGraph = (adj, V) => {
  //     let v = 0;
  //     let w = 0;
  //     let connectedList = [];
  //     for (let u = 0; u < V; u++) {
  //       console.log(`${persons[u]} makes an edge with`);
  //       //   connectedList.push(persons[u]);
  //       //   console.log(connectedList);

  //       for (let j = 0; j < adj[u].length; j++) {
  //         v = adj[u][j][0];
  //         w = adj[u][j][1];

  //         console.log(`           ${persons[v]} with edge hapiness = ${w}`);
  //       }
  //     }
  //   };

  //   const sortArray = (adj) => {
  //     console.log("matris: ", adj);
  //     const res = [];
  //     for (let i = 0; i < adj.length; i++) {
  //       res.push(
  //         adj[i].sort((a, b) => {
  //           return b[1] - a[1];
  //         })
  //       );
  //       adj[i].pop(adj[i].length - 1);
  //     }
  //     console.log(res);
  //     let result = 0;

  //     console.log(res.map((a) => (result += a[0][1] + a[1][1])));
  //     console.log(result);
  //   };

  //   const V = persons.length;
  //   let adj = Array(V);
  //   //create matris (lenght * length)
  //   for (let i = 0; i < V; i++) {
  //     adj[i] = [];
  //   }

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

export default DinnerTable;
