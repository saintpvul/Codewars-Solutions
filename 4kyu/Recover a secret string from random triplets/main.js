/*

There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

*/

// solution

function recoverSecret(triplets) {
  const graph = {};
  const nodes = new Set();

  triplets.forEach((triplet) => {
    nodes.add(triplet[0]);
    nodes.add(triplet[1]);
    nodes.add(triplet[2]);
  });

  nodes.forEach((node) => {
    graph[node] = { incoming: new Set(), outgoing: new Set() };
  });

  triplets.forEach((triplet) => {
    const [char1, char2, char3] = triplet;
    graph[char1].outgoing.add(char2);
    graph[char1].outgoing.add(char3);
    graph[char2].incoming.add(char1);
    graph[char2].outgoing.add(char3);
    graph[char3].incoming.add(char1);
    graph[char3].incoming.add(char2);
  });

  const startNodes = [];
  nodes.forEach((node) => {
    if (graph[node].incoming.size === 0) {
      startNodes.push(node);
    }
  });

  const sortedNodes = [];
  const queue = startNodes.slice();
  while (queue.length > 0) {
    const node = queue.shift();
    sortedNodes.push(node);
    graph[node].outgoing.forEach((neighbor) => {
      graph[neighbor].incoming.delete(node);
      if (graph[neighbor].incoming.size === 0) {
        queue.push(neighbor);
      }
    });
  }

  return sortedNodes.join("");
}
