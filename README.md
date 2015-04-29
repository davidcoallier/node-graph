node.js Graph Theory module
============================

> Maths is fun and so is node.js so why not use them together!

introduction
------------

The goal of this "node-graph" module is to provide a framework for working with graphs
from within node.js.

It allow (will) developers to build different types of graphs G, create vertices associated to that graph V(G), and create edges to associate/link the vertices together E(G).

After building the graphs, it will allow developers to traverse, sort and play with the graphs using the most popular algorithms.

Currently in EXTREMELY early stages, feel free to contribute!

synopsis
--------

Creating a basic Graph object:
```javascript
    var sys   = require('sys');
    var graph = require('./lib/graph');

    var Graph = new graph.Graph();
```  
Now that you have your Graph object, you should add vertices. In order to do that, do:
```javascript    
    var vertex = require('./lib/vertex');
    var vertexOne = new vertex.Vertex('label1', {});
    Graph.addVertex(vertexOne);
```    
To make that graph more interesting, you'll need to add a second vertex. This time, you can do it inline like such:
```javascript
    Graph.addVertex(new vertex.Vertex('label2', {}));
```    
Once you are done, you can now create an edge to link those two vertices together:
```javascript
    Graph.addEdge(new Edge('label1', 'label2', {}));
```    
Now the next step is to build more stuff on top of that :-)


license
-------

Released under the New BSD License.

Copyright (c) 2010 David Coallier


disclaimer
----------

Very likely to be broken. Feel free to contribute, there's still a lot to do, this is merely teh beginning of the whole graph engine.

