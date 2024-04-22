class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class Tree {
    constructor() {
      this.root = null; 
    } 
    insert(value) {
      const node = new TreeNode(value);
      if(!this.root) {
        this.root = node;
      } else {
        let temp = this.root;
        while(true) {
        if(node.value < temp.value) {
            if(temp.left === null) {
            temp.left = node
            return this
            }   
            temp = temp.left 
        } else {
          if(temp.right === null ) {
            temp.right = node;
            return temp
        }
        temp = temp.right
        }
    } 
      }
    }
}

const firstTree = new Tree();
firstTree.insert(3)
firstTree.insert(2)
firstTree.insert(4)
firstTree.insert(2)
console.log(firstTree)