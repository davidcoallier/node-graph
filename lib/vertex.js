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
    return this;
};

/**
 * Get the neighbours edges of a certain vertex
 *
 * This method is used to retrieve an array/List (L) 
 * of the edges associated to a vertex.
 *
 * @return List A list of edges associated to a certain vertex.
 */
Vertex.prototype.getNeighbours = function() {
    return this.edges;
};

/**
 * Am I it's neighbour?
 *
 * This method is used to retrieve wheter or not a certain other
 * vertex is a neighbour of this vertex.
 *
 * @param  string vertexLabel The vertex to retrieve.
 * @return boolean true or false.
 */
Vertex.prototype.isNeighbourOf = function(vertexLabel) {
    if (this.edges !== undefined) {
        if (vertexLabel in this.edges) {
            return true;
        }
    }

    return false;
};

// And we export to node.js
exports.Vertex = Vertex;
