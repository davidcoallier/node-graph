/**
 * As Graph Theory allows mathematicians and computer scientists to study
 * mathematical structures used to model relations between certain collections
 * it only makes sense to have something to play with using Node.js as well.
 *
 * You can try to build a simple graph by doing the following:
 *
 * <code>
 * var graph  = require('./lib/graph');
 * var vertex = require('./lib/vertex');
 * var edge   = require('./lib/edge');
 * var sys    = require('sys');
 *
 * var graph = new graph.Graph();
 * var VertexOne = new vertex.Vertex('label1', {});
 * var VertexTwo = new vertex.Vertex('label2', {});
 * 
 * graph.addVertex(VertexOne);
 * graph.addVertex(VertexTwo);
 * 
 * // or inline...
 * graph.addVertex(new vertex.Vertex('label3', {}));
 *
 * var EdgeExample = new edge.Edge('label1', 'label3', {});
 * 
 * graph.addEdge(EdgeExample);
 * sys.puts(sys.inspect(graph.edges()));
 *
 * </code>
 *
 * Granted this code currently does not do much apart from building the Graphs but
 * the point is to add digraphs in the short future, and then have the ability to 
 * build your graphs but then apply different types of sorting algorithms and build
 * different types of graphs and traversal, sorting, etc.
 *
 * Author: David Coallier <david.coallier@gmail.com>
 * License: New BSD <http://www.opensource.org/licenses/bsd-license.php>
 * Date: 6th October, 2010
 */
 
/**
 * This is the main Graph object to instantiate to
 * do some magicless-magic.
 *
 * <code>
 * var graph = new Graph();
 * </code>
 */
var Graph = function() {
    this.vertices = {};
    return this;
};

/**
 * Lazyman's comparison of objects
 *
 * This method is used to compare two objects together to see
 * if they have the same properties or if they are the same.
 *
 * @param  Object  The first object to compare.
 * @param  Object  The second object to compare.
 *
 * @return Boolean whether or not the first object is identical
 *                 to the second one.
 */
Graph.prototype.compare = function(objectOne, objectTwo) {
    return JSON.stringify(objectOne) === JSON.stringify(objectTwo);
};

/**
 * Get the vertices
 *
 * This method returns a list of all the vertices
 * in the graph.
 *
 * @return Array An array of vertices added in teh graph
 */
Graph.prototype.getVertices = function() {
    return this.vertices;
};

/**
 * Return a list of edges for a graph
 *
 * This method is used to return a list of edges associated
 * to a graph. It returns an array of relation objects.
 *
 * @return Array of "relation" objects which contains a list of all
 *         the vertices are related to.
 */
Graph.prototype.getEdges = function() {
    var i = 0, edges = [];
    for (var vertex in this.vertices) {
        if (edges[i] === undefined) {
            edges[i] = {};
            edges[i][vertex] = [];
        }
        
        for (var x in this.vertices[vertex].edges) {
            edges[i][vertex].push(x);
        }
        
        ++i;
    }
    
    return edges;
};

/** 
 * Check if the graph has a vertex
 *
 * This method is used to identify whether or not
 * a graph has a certain vertex in the set of vertices.
 *
 * @param  String  The label associated to a vertex.
 * @return boolean Whether or not the vertex exists in the set this.vertices.
 */
Graph.prototype.hasVertex = function(vertexLabel) {
    return vertexLabel in this.vertices;
};

/**
 * Add a vertex to the Graph
 *
 * This method is used to add a vertex to the graph.
 * When adding a new vertex to the set of vertices (or to the graph)
 * the vertex are identified by "label" which is the 
 * identifier of the vertex.
 *
 * When instantiating a new "Vertex" the only required parameter
 * is the first one which is the label.
 *
 * <code>
 * var Graph = new Graph();
 *
 * var vertex = new Vertex('labelName', attrs);
 * Graph.addVertex(vertex);
 * Graph.addVertex(new Vertex('label2', {});
 *
 * </code>
 *
 * @param  Vertex A Vertex object built from ./lib/vertex
 * @return void
 */
Graph.prototype.addVertex = function(vertex) {
    if (this.vertices[vertex.label] === undefined) {
        this.vertices[vertex.label] = vertex;
    }
};

/**
 * Add an edge to the graph.
 *
 * This method is used to add an edge to the graph object. 
 * By connecting two vertices together, we create an edge.
 *
 * <code>
 * var graph = new Graph();
 * graph.addVertex(new Vertex('label1'));
 * graph.addVertex(new Vertex('label2'));
 * graph.addEdge(new Edge('label1', 'label2', {}));
 * </code>
 *
 * @param  Edge An "Edge" object acquired from ./lib/edge
 * @return void
 */
Graph.prototype.addEdge = function(edge) {
    var vertexOne = edge.vertexOne;
    var vertexTwo = edge.vertexTwo;
    
    if (!(vertexOne in this.vertices[vertexTwo].edges) && 
        !(vertexTwo in this.vertices[vertexOne].edges))
    {
        this.vertices[vertexOne].edges[vertexTwo] = {};
        this.vertices[vertexTwo].edges[vertexOne] = {};
    }
};

/**
 * Delete a vertex
 *
 * This method, as the name suggests, deletes a vertex and it's edges
 * from a graph object.
 *
 * @param  String The vertex to delete.
 * @return void
 */
Graph.prototype.deleteVertex = function(vertexLabel) {
    delete this.vertices[vertexLabel];
};

/**
 * Delete an edge
 *
 * This method, once again as the name suggests, deletes an
 * edge from a graph. By passing the edge object to delete, we
 * can identify which vertices are affected and cherry pick which 
 * edges to remove.
 *
 * @param  Edge An "Edge" object acquired from ./lib/edge
 * @return void
 */
Graph.prototype.deleteEdge = function(edge) {    
    delete this.vertices[edge.vertexOne].edges[edge.vertexTwo];
    delete this.vertices[edge.vertexTwo].edges[edge.vertexOne];
};

/**
 * Verifies if a graph has a certain edge
 *
 * This method is used to verify if a certain graph contains an edge
 * object that is passed to it - That is a "link" to 2 single vertices.
 *
 * @param  Edge An "Edge" object acquired from ./lib/edge
 * @return Boolean Whether it exists or not in the set of vertices and graph.
 */
Graph.prototype.hasEdge = function(edge) {
    var vertexOne = edge.vertexOne;
    var vertexTwo = edge.vertexTwo;
    
    for (var vertex in this.vertices) {
        if (vertex.edges[vertexOne] !== undefined && vertex.edges[vertexTwo] !== undefined) {
            return true;
        }
    }
    
    return false;
};

/**
 * Return the order of a certain vertex
 *
 * This method is used only to return the current object
 * position of a certain vertex in a graph.
 *
 * @param  String  The label associated to a vertex.
 * @return Int     The position of the vertex in the vertices set.
 */
Graph.prototype.vertexOrder = function(vertexLabel) {
    var position = 0;
    for (var vertex in this.vertices) {
        if (vertex.label == vertexLabel) {
            return position;
        }
        ++position;
    }
};

// And we export to node.js
exports.Graph = Graph;
