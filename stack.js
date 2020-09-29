class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error("Stack is full");
    }
  }

  pop() {
    if (this.size > 0 && !this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      console.log("Stack is empty!");
    }
  }

  peek() {
    if (this.size > 0 && !this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// 1. Define an empty pizza stack with a maxSize of 6
// const pizzaStack = new Stack(6);
// 2. Add pizzas as they are ready until we fill up the stack
// for (let i = 1; i <= 6; i++) {
//   pizzaStack.push(`Pizza #${i}`)
// }
// 3. Try pushing another pizza to check for overflow
// try {
//   pizzaStack.push('ham');
// } catch (e) {
//   throw new Error(e);
// }

// 4. Peek at the pizza on the top of stack and log its value
// console.log(pizzaStack.peek());

// 5. Deliver all the pizzas from the top of the stack down
// pizzaStack.pop();
// pizzaStack.pop();
// pizzaStack.pop();
// pizzaStack.pop();
// pizzaStack.pop();
// pizzaStack.pop();

// 6. Try popping another pizza to check for empty stack
// try {
//   pizzaStack.pop();
// } catch (e) {
//   throw new Error(e);
// }
