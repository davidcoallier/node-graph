var sys    = require('sys');
var edge   = require('../lib/edge');
var graph  = require('../lib/graph');
var vertex = require('../lib/vertex');

var Graph       = new graph.Graph();
var VertexOne   = new vertex.Vertex('nameOne',   {});
var VertexTwo   = new vertex.Vertex('nameTwo',   {});
var VertexThree = new vertex.Vertex('nameThree', {});

Graph.addVertex(VertexOne);
Graph.addVertex(VertexTwo);
Graph.addVertex(VertexThree);

Graph.addEdge(new edge.Edge('nameOne', 'nameTwo',   {}));
Graph.addEdge(new edge.Edge('nameOne', 'nameThree', {}));

// This should give me nameTwo and nameThree as the neighbours.
var neighboursOne = VertexOne.getNeighbours();
sys.puts(sys.inspect(neighboursOne));

// This should only give us nameOne
var neighboursThree = VertexThree.getNeighbours();
sys.puts(sys.inspect(neighboursThree));
