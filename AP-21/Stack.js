class StackNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor(value) {
     const node = new StackNode(value);
     this.top = node;
     this.height = 1;
    }
    push(value) {
     const node = new StackNode(value)   
     if(!this.top) {
       this.top = node;
     } else {
        node.next = this.top;
        this.top = node;
     }
     this.height++;
     return this;
    }
    pop() {
      if(!this.top || this.height === 0) return undefined
      if(this.height === 1) {
        this.top = null;
        this.height = 0;
        return this
      } else {
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.height--;
        return temp;
      }
    }
}

const firstStack = new Stack(1);
firstStack.push(2);
console.log(firstStack.pop());
console.log(firstStack);