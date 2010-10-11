/**
 * The adjacency matrix module is used to build... an adjacency matrix
 * of the graph. Using an adjancy matrix, it makes it fairly simple to 
 * identify paths in a graph.
 *
 * <code>
 * var graph = require('./lib/graph');
 * var adjacency = require('./lib/matrices/adjacency');
 * // Create a graph and add vertices....
 * var matrix = new adjacency.Adjacency(
 *    new graph.Graph().addVertex(
 *        new vertex.Vertex('name')).addVertex(
 *        new vertex.Vertex('name2')).addVertex(
 *        new vertex.Vertex('name3')).addEdge(
 *        new edge.Edge('name', 'name3'))
 * );
 * </code>
 *
 * The previous code will create an adjacency list that 
 * looks very similar to:
 *
 *          name  name2  name3
 *   name   [0]    [0]    [1]
 *   name2  [0]    [0]    [0]
 *   name3  [1]    [0]    [0]
 *
 * Author: David Coallier <david.coallier@gmail.com>
 * License: New BSD <http://www.opensource.org/licenses/bsd-license.php>
 * Date: 10th October, 2010
 */

/**
 * Build an adjacency matrix of the graph and passed
 * vertices.
 *
 * @param  List A list of Vertices to establish "relationships" or rather
 *              build the matrix around.
 *
 * @return An adjacency list.
 */
var Adjacency = function(vertices) {
    this.vertices = vertices;
    this.matrix = {};

    var self = this;
    
    /**
     * Build the adjacency matrix
     *
     * This lamda receives a vertex object, uses
     * the other local objects from "self" which is merely a copy
     * of "this" and creates an array of vertex and their relation.
     *
     * @param  Vertex A vertex object
     * @return Object An array of information about a certain vertex and it's
     *                associations in the adjacency list.
     */
    this.build = function(vertex) {
        var matrix = {};
        var neighbours = vertex.getNeighbours();
        for (var vertexLabel in self.vertices) {
            matrix[vertexLabel] = 0;
            if (vertexLabel in neighbours) {
                matrix[vertexLabel] = 1;
            }
        }

        return matrix;
    };

    for (var vertex in vertices) {
        self.matrix[vertex] = self.build(vertices[vertex]);
    }

    return self.matrix;
};

// And we export to node.js
exports.Adjacency = Adjacency;
