const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    let isNodeExist = searchNode(this.rootNode, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } 
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }

    return isNodeExist;
  }

  find(data) {
    let result = searchNode(this.rootNode, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }

    return result;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left && node.right) {
          node = node.right;
          return node;
        }
        if (node.left && !node.right) {
          node = node.left;
          return node;
        }
        if (node.left && node.right) {
          let minNode = node.right;
          while (minNode.left) {
            minNode = minNode.left;
          }
          node.data = minNode.data;

          node.right = removeNode(node.right, minNode.data);

          return node;
        }
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    const isMin = this.rootNode;
    let result = searchMin(isMin);

    function searchMin(node) {
      if (!node) {
        return null;
      }

      let min = node;
      while (min.left) {
        min = min.left
      }

      return min.data
    }
    
    return result;
  }

  max() {
    let isMax = this.rootNode;
    let result = searchMax(isMax);

    function searchMax(node) {
      if (!node) {
        return null;
      }
      let max = node;
      while (max.right) {
        max = max.right;
      }
      return max.data;
    }
    return result;
}
}

module.exports = {
  BinarySearchTree
};