
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('type error, node needs to be null or instance of Node class');
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error('type error, node needs to be null or instance of Node class');
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

// const strawberryNode = new Node("Berry Tasty");
// const vanillaNode = new Node('Vanilla')
// const coconutNode = new Node("Coconuts for Coconut");

// vanillaNode.setNextNode(strawberryNode);
// strawberryNode.setNextNode(coconutNode)

// let currentNode = vanillaNode; 

// while (currentNode !== null) {
//   console.log(currentNode.data)
//   currentNode = currentNode.getNextNode()
// }