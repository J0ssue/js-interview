class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size += 1;

      console.log(`Added ${data}, Queue size is now ${this.size}`);
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      );
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}

