// Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph.
// The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.
// An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G.
// There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.

function shortestPath(strArr) {
  let graph = {}
  for (let i=1; i<parseInt(strArr[0])+1; i++) {
    graph[strArr[i]] = []
  }
  // construct graph
  let start = strArr[1]
  let end = strArr[parseInt(strArr[0])]

  for (let i=parseInt(strArr[0])+1; i<strArr.length; i++) {
    let connection = strArr[i].split('-')
    graph[connection[1]].push(connection[0])
    graph[connection[0]].push(connection[1])
  }
  // bfs
  let visit = []
  let queue = [[start]]
  var path = []
  var newPath = []
  console.log(graph)
  while (queue.length>0) {
    path = queue.pop(0)
    node = path[path.length-1]

    // check if visited
    if (!visit.includes(node)) {
      neighbors = graph[node]

      // iterate through neighbors
      for (let i=0; i<neighbors.length; i++) {
        newPath = [...path]
        newPath.push(neighbors[i])
        queue.push(newPath)

        if (neighbors[i] === end) {
          return newPath.join('-')
        }
      }  
    }
    visit.push(node)
  }

  return -1;
}


module.exports = shortestPath;
