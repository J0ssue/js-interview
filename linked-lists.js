class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      const newNode = new Node(data);
      this.head = newNode;
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (removedHead === null) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  swapNodes(list, data1, data2) {
    if (data1 === data2) {
      console.log("Elements are the same - no swap needed.");
      return;
    }
    let node1 = list.head;
    let node2 = list.head;
    let node1Prev = null;
    let node2Prev = null;

    while (node1 !== null) {
      if (node1.data === data1) {
        break;
      }
      node1Prev = node1;
      node1 = node1.getNextNode();
    }
    while (node2 !== null) {
      if (node2.data === data1) {
        break;
      }
      node2Prev = node2;
      node2 = node2.getNextNode();
    }

    if (node1 === null || node2 === null) {
      console.log("Swap not possible - one or more element is not in the list");
      return;
    }
    if (node1Prev === null) {
      list.head = node2;
    } else {
      node1Prev.setNextNode(node2);
    }
    if (node2Prev === null) {
      list.head = node1;
    } else {
      node2Prev.setNextNode(node1);
    }

    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
  }

  nthLastNode = (linkedList, n) => {
    let current = null;
    let tailSeeker = linkedList.head;
    let count = 0;
    while (tailSeeker) {
      tailSeeker = tailSeeker.next;
      if (count >= n) {
        if (!current) {
          current = linkedList.head;
        }
        current = current.next;
      }
      count++;
    }
    return current;
  };

  findNodeIteratively(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  findNodeRecursively(data, currentNode = this.head) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.data === data) {
      return currentNode;
    } else {
      return this.findNodeRecursively(data, currentNode.getNextNode());
    }
  }

  findMiddle = (linkedList) => {
    let fast = linkedList.head;
    let slow = linkedList.head;

    // As long as the end of the list is not reached
    while (fast !== null) {
      // Move the fast pointer at least one step
      fast = fast.getNextNode();
      // If it isn't at the end of the list
      if (fast !== null) {
        // Move both pointers forward once
        fast = fast.getNextNode();
        slow = slow.getNextNode();
      }
    }
    // At this point, the slow pointer is in the middle
    return slow;
  };
  findMiddleAlternate = (linkedList) => {
    let count = 0;
    let fast = linkedList.head;
    let slow = linkedList.head;

    while (fast !== null) {
      fast = fast.getNextNode();
      if (count % 2 !== 0) {
        slow = slow.getNextNode();
      }
      count++;
    }
    return slow;
  };

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output = output + "<tail>";
    console.log(output);
  }
}

// const testList = new LinkedList();
// for (let i = 0; i <= 10; i++) {
//   testList.addToTail(i);
// }

// testList.printList();
// swapNodes(testList, 2, 5);
// testList.printList();

// seasons
// const seasons = new LinkedList();

// seasons.addToHead('summer');
// seasons.addToHead('spring');
// seasons.addToTail('fall');
// seasons.addToTail('winter');
// seasons.removeHead();

// seasons.printList()
