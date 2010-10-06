/**
 * This is the object to create a vertex - or a node - or a dot which are all the same. For
 * the sake of clarity, this node-graph module is going to exploit the term "vertex" and
 * "vertices".
 *
 * Once created and associated to a graph, the vertex is now a member of the vertex set
 * of graph G, or V(G).
 *
 * Author: David Coallier <david.coallier@gmail.com>
 * License: New BSD <http://www.opensource.org/licenses/bsd-license.php>
 * Date: 6th October, 2010
 */
 
/** 
 * This is the Vertex class that is used to do some magicless-magic.
 *
 * <code>
 * var VertexOne = new Vertex('vertexLabelOne', {});
 * </code>
 *
 * @param  String The label to associate to this vertex v.
 * @param  Object A list of different types of attributes associated
 *                to this vertex.
 */
var Vertex = function(label, attributes) {
    this.label = label;
    this.edges = {};
    this.attributes = attributes || {};
};

// And we export to node.js
exports.Vertex = Vertex;
