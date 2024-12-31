const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  /*constructor() {
    this.root = null;
  }*/

  root() {
    if (!this.begin) return null;
    return this.begin;
  }

  add(data) {
    this.begin = addFunc(this.begin, data);

    function addFunc(node, data) {
      if (!node) {
          return new Node(data);
      }

      if (node.data === data) {
          return node;
      }

      if (data < node.data) {
          node.left = addFunc(node.left, data);
      } else {
          node.right = addFunc(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchFunc(this.begin, data);

    function searchFunc(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (data < node.data) {
        return searchFunc(node.left, data);
      } else {
        return searchFunc(node.right, data);
      }
    }
  }

  find(data) {
    return findFunc (this.begin, data);

    function findFunc(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        return findFunc(node.left, data);
      } else {
        return findFunc(node.right, data);
      }
    }
  }

  remove(data) {
    this.begin = removeFunc(this.begin, data);

    function removeFunc(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeFunc(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeFunc(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeFunc(node.left, maxLeft.data);

        return node;
      }
    }
  }

  min() {
    if (!this.begin) return;
    return findMin(this.begin);

    function findMin(node) {
      if (!node.left) {
        return node.data;
      } else {
        return findMin(node.left);
      }
    }

  }

  max() {
    if (!this.begin) return;
    return findMax(this.begin);

    function findMax(node) {
      if (!node.right) {
        return node.data;
      } else {
        return findMax(node.right);
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};