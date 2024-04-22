class QueueNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Queue {
    constructor(value) {
      const node = new QueueNode(value);
      this.first = node;
      this.last  = node;
      this.length = 1;  
    }
    pushMethod(value) {
      const newNode = new QueueNode(value)
      if(this.length === 0) {
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
        return this 
      } else {
        this.last.next = newNode;
        this.last = newNode
      }
      this.length++;
      return this
    }
    popMethod() {
        if(this.length === 0) return undefined;
        if(this.length === 1) {
            this.first = null;
            this.last = null;
            this.length = 0;
            return true
        } else {
            let temp = this.first
            this.first = this.first.next
            temp.next = null;
            this.length--;
            return temp;
        }
    }
}

const first = new Queue(1);
first.pushMethod(2);
first.pushMethod(3);
first.popMethod();
console.log(first)