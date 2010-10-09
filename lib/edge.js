/**
 * This is the class used to build a connection between two Vertices.
 *
 * Once created and associated to a graph, the edge becomes part of E(G).
 *
 * Author: David Coallier <david.coallier@gmail.com>
 * License: New BSD <http://www.opensource.org/licenses/bsd-license.php>
 * Date: 6th October, 2010
 */
 
/**
 * This is the Edge class that is used to do some magicless-magic.
 *
 * <code>
 * var edge = new Edge('vertexLabelOne', 'vertexLabelTwo', {});
 * </code>
 *
 * @param  String The label of the first vertex to associate with the second.
 * @param  String The label of the second vertex to associate with the first one.
 * @param  Object A list of attributes. Could be weight, direction, bidirection, etc.
 */
var Edge = function(vertexOne, vertexTwo, attributes) {
    this.vertexOne = vertexOne;
    this.vertexTwo = vertexTwo;
    this.attributes = attributes || {};
    return this;
};

// And we export to node.js
exports.Edge = Edge;
