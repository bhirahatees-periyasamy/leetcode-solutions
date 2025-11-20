function powerStationQueries(c, connections, queries) {
  const graph = {};
  for (let i = 1; i <= c; i++) graph[i] = [];
  for (const [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const online = new Set();
  for (let i = 1; i <= c; i++) online.add(i);

  const result = [];

  for (const [type, station] of queries) {
    if (type === 2) {
      online.delete(station);
      continue;
    }

    if (online.has(station)) {
      result.push(station);
      continue;
    }

    const visited = new Set();
    const queue = [station];
    visited.add(station);
    let minOnline = Infinity;

    while (queue.length) {
        const u = queue.shift();
      if (online.has(u) && u < minOnline) minOnline = u;
      for (const v of graph[u]) {
        if (!visited.has(v)) {
          visited.add(v);
          queue.push(v);
        }
      }
    }

    result.push(minOnline === Infinity ? -1 : minOnline);
  }

  return result;
}

// sample test
let c = 3;
let connections = [[2, 3]];
let queries = [
  [2, 2],
  [2, 2],
  [1, 2],
  [1, 3],
  [2, 1],
  [1, 1],
  [2, 2],
  [1, 2],
  [1, 1],
];

console.log(powerStationQueries(c, connections, queries)); // -> [3,3,-1,3,-1]
