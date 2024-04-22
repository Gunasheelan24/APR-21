class SingleNode {
    constructor(value) {
      this.value = value
      this.next = null;
    }
}


class SingleLinkList {
    constructor(data) {
     const newNode = new SingleNode(data);
     this.head = newNode;
     this.tail = this.head;
     this.length = 1;
    }
    push(value) {
     const newNode = new SingleNode(value);
     if(!value) return undefined;
     if(!this.head.value) {
        this.head = newNode;
        this.tail = newNode;
     } else {
        this.tail.next = newNode;
        this.tail = newNode;
     }
     this.length++;
     return this
    }
    pop() {
        if(!this.head || this.length === 0) throw new Error("Your LinkedList Is Empty");
        let temp;
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          temp = this.head;
          let prev = this.head
          while(temp.next) {
            prev = temp;
            temp = temp.next
          }  
          this.tail = prev;
          prev.next = null;
        }
        this.length--;
        return temp;
    }
    unShift(value) {
      const newNode = new SingleNode(value);
       if(!this.head.value || !this.head) {
        this.length--;
        this.head = newNode;
        this.tail = newNode;
       } else {
         newNode.next = this.head;
         this.head = newNode;
       }
       this.length++;
       return this
    }
    shift() {
        if(!this.head || !this.length) throw new Error("Your LinkedList Is Empty");
        let temp;
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
        } else {
          temp = this.head;
          this.head = this.head.next;
          temp.next = null;
        }
        this.length--;
        return temp;
    }
    findByIndex(index) {
      if(!this.head || !this.length) return undefined;
      if(index < 0 || index >= this.length) return undefined;
      let temp = this.head;
      for(let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp
    }
    findByValue(value) {
     if(!this.head || !this.length) return undefined;
     let temp = this.head;
     while(temp.next) {
       if (temp.value === value) {
        return temp
       } else {
        temp = temp.next
       }
     }
     return -1
    }
    updateValueByIndex(index, value = "Chumma Value") {
      if(!this.head) return undefined;
      if(index < 0 || index >= this.length) return undefined;
      const getPointerByFindMethod = this.find(index);
      if(getPointerByFindMethod) {
        getPointerByFindMethod.value = value;
        return this;
      } else {
        return undefined
      }
    }
    insertByIndex(index, value) {
     const newNode = new SingleNode(value);
     if(!value) return undefined;
     if(index == 0) return this.unShift(value);
     if(index == this.length) return this.push(value);
     if(index < 0 || index >= this.length) return undefined;
     const getPreviousObject = this.findByIndex(index - 1);
     const getNextObject = getPreviousObject.next;
     getPreviousObject.next = newNode;
     newNode.next = getNextObject;
     this.length++;
     return this
    }
}

const first = new SingleLinkList("gunasheelan");
first.push("Arullchelvan");
first.push("Reshma");
first.push("Sivaa");
first.insertByIndex(2, "Rengoku")