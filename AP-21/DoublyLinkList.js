class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    } 
}

class DoublylinlList {
    constructor(value) {
        const node = new DoublyNode(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
    pushMethod(value) {
        const node = new DoublyNode(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this;
    };
    unShift(value) {
        const node = new DoublyNode(value);
        if(!this.head) {
           this.head = node;
           this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    };
    popMethod() {
        if(!this.head) return undefined
        let temp = this.tail
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        return temp 
    };
    shiftMethod() {
        if(!this.head) return undefined;
        let temp;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp ? temp : true;
    };
    getValueByIndex(index) {
        if(this.length === 0) return undefined;
        if(index < 0 || index > this.length) return undefined;
        if(this.length === index) return this.tail;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            if(index < Math.floor(this.length / 2)) {
                temp = temp.next;
            } else {
                temp = this.tail.prev;
            }
        }
        return temp
    };
    setValueByIndex(index, value) {
        const getIndex = this.getValueByIndex(index);
        if(getIndex) {
            getIndex.value = value
            return this;
        } else {
            return undefined
        }
    };
    insertValueByIndex(index, value) {
      if(index === 0) return this.unShift(value);
      if(index === this.length) return this.pushMethod(value);
      if(index < 0 || index > this.length) return undefined;
    
      const newNode = new DoublyNode(value);
      const previousIndex = this.getValueByIndex(index - 1);
      const nextIndex = previousIndex.next;
      previousIndex.next = newNode;
      newNode.prev = previousIndex;
      newNode.next = nextIndex;
      nextIndex.prev = newNode
      this.length++;
      return this
    };
}

const firstNode = new DoublylinlList(1);