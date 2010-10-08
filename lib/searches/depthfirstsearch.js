var sys = require('sys');

/**
 * This object is used to execute depth first search traversals on graphs. It
 * returns an object containing a spanning tree, a postorder and a preorder.
 *
 * Author: David Coallier <david.coallier@gmail.com>
 * License: New BSD <http://www.opensource.org/licenses/bsd-license.php>
 * Date: 7th October, 2010
 */
 
/**
 * This is the depth first search class that is used to traverse graphs
 * using a depth first search traversal algorithms.
 *
 * The reason why the spanning tree is an object instead of an array like
 * preorder and postorder is because the spanning tree can return relevant
 * and interesting data about the nodes traversed in the graph.
 *
 * @param  Object An object containing a list of vertices.
 */
var DepthFirstSearch = function(vertices) {
    this.vertices     = vertices;
    this.visited      = {};
    this.spanningTree = {};
    this.preorder     = [];
    this.postorder    = [];

    var self = this;

    /**
     * Execute the DFS search on a vertex.
     *
     * This method receives a vertex and subsequantly it's edges/neighbours.
     * by using a list of neighbours, we recursively build a list of edges
     * being traversed and visited.
     *
     * See the self.visited property if you want to know who's been visited.
     *
     *     1
     *    / \
     *   2   3
     *
     * @param  Object A vertex object and it's ability to retrieve neighbours
     * @return Mixed  Either nothing and appends to the post order or a recursive
     *                call to itself passing the vertex object associated to a neighbour.
     */
    this.search = function(vertex) {
        if (typeof(vertex) === 'undefined') return false;
        
        self.visited[vertex.label] = 1;
        self.preorder.push(vertex.label);
        
        if (self.vertices[vertex.label] !== undefined) {
            for (neighbour in self.vertices[vertex.label].getNeighbours()) {
                if (!(neighbour in self.visited) && self.vertices[neighbour] !== undefined) {
                    self.spanningTree[neighbour] = self.vertices[neighbour];
                    self.search(self.vertices[neighbour]);
                }
            }
        }

        self.postorder.push(vertex.label);
    };

    for (var vertex in vertices) {
        if (!(vertex in self.visited)) {
            self.spanningTree[vertex] = null;
            self.search(vertices[vertex]);
        }
    }
    
    return {
        spanningTree: self.spanningTree, 
        preorder: self.preorder, 
        postorder: self.postorder
    }
};

// And we export to node.js
exports.DepthFirstSearch = DepthFirstSearch;
