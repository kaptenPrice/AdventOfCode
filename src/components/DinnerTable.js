import React, { useEffect, useState } from "react";

const DinnerTable = () => {
  useEffect(() => {
    addAllConnections();
    printGraph(adj, V);
    // sort(adj)
    // removeLast(adj)
  }, []);
  const addAllConnections = () => {
    adj = addEdge(adj, 0, 1, 54);
    adj = addEdge(adj, 0, 2, -2);
    adj = addEdge(adj, 0, 3, -79);
    adj = addEdge(adj, 1, 0, 83);
    adj = addEdge(adj, 1, 2, -63);
    adj = addEdge(adj, 1, 3, -7);
    adj = addEdge(adj, 2, 0, 46);
    adj = addEdge(adj, 2, 1, -7);
    adj = addEdge(adj, 2, 3, 41);
    adj = addEdge(adj, 3, 0, -79);
    adj = addEdge(adj, 3, 1, 60);
    adj = addEdge(adj, 3, 2, 55);
  };

  const persons = ["Alice", "Bob", "David", "Carol"];

  const addEdge = (list, person, neighbor, hapiness) => {
    list[person].push([neighbor, hapiness]);
    // list[neighbor].push([person, hapiness])
    return list;
  };

  const printGraph = (adj, V) => {
    let v = 0;
    let w = 0;
    let connectedList = [];
    for (let u = 0; u < V; u++) {
      // console.log(`${persons[u]} makes an edge with`)
      connectedList.push(persons[u]);
      console.log(connectedList);

      for (let j = 0; j < adj[u].length; j++) {
        v = adj[u][j][0];
        w = adj[u][j][1];
        // connectedList[u]

        // console.log(
        //     `           ${persons[v]} with edge hapiness = ${w}`
        // )
      }
    }
  };

  const sort = (adj) => {
    adj.sort((a, b) => {
      return a - b;
    });
    console.log(adj);
  };
  const removeLast = (adj) => {
    adj.pop();
    console.log(adj);
  };

  const V = persons.length;
  let adj = Array(V);
  //create matris (lenght * length)
  for (let i = 0; i < V; i++) {
    adj[i] = [];
  }

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
