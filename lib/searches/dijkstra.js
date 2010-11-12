var sys = require('sys');

/**
 * This object is used to execute apply the dijkstra shortest-path algorithm on
 * single-sourced graphs. 
 *
 * Author: David Coallier <david.coallier@gmail.com>
 * License: New BSD <http://www.opensource.org/licenses/bsd-license.php>
 * Date: 1st November, 2010
 */

/**
 * The Dijkstra Shortest-path search object is used to identify the
 * shortest distance between two vertices (A source and a destination)
 *
 * Once this is found the main search returns a list of nodes in order
 * of the path that is the shortest path.
 *
 * @param  Graph  The graph to use to identify the shortest path
 *                from source to destination.
 * @param  string The source (Where to start from in the graph)
 * @param  string The destination to reach and identify the shortest path to.
 *
 * @return Object A list of vertices that constitute the shortest path from
 *                source-to-destination
 */
var Dijkstra = function(graph, source, destination, max) {
    this.infinity = max || Infinity; 
    this.dist = this.infinity;

    this.graph = graph;

    this.search = function (source, destination) {
        this.costs[source] = 0;
        var open = {'0': [source]};
        var previous =  {};

        var costDifferentiator = function(costA, costB) {
            return parseFloat(costA) - parseFloat(costB);
        };

        for (vertices in graph) {
    
        }
    };
};

// And now we export to node.js
exports.Dijkstra = Dijkstra;
