var sys    = require('sys');
var edge   = require('./lib/edge');
var graph  = require('./lib/graph');
var vertex = require('./lib/vertex');

var Graph       = new graph.Graph();
var VertexOne   = new vertex.Vertex('nameOne',   {});
var VertexTwo   = new vertex.Vertex('nameTwo',   {});
var VertexThree = new vertex.Vertex('nameThree', {});

Graph.addVertex(VertexOne);
Graph.addVertex(VertexTwo);
Graph.addVertex(VertexThree);

Graph.addEdge(new edge.Edge('nameOne', 'nameTwo',   {}));
Graph.addEdge(new edge.Edge('nameOne', 'nameThree', {}));

var neighbours = Graph.neighbours('nameThree');
