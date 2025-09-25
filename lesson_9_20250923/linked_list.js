/** Связанный список */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        if(data>=0) {
            this.data = data;
        }
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; //ccылка на первый узел
      }

    // --- First element ---
    pushFirst(data) {
        let newNode = new Node(data);
        //Make next of new Node as head
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.setNext(this.head);
        //Move the head to point to new Node
        this.head = newNode;
    }

    removeFirst() { //удаление с начала
        if (this.head === null) {
            return false;
        }
        this.head = this.head.next;
        return true;
    }
    
    // --- Last element ------
    pushLast(data) {
        let newNode = new Node(data);
        // Is empty, then make the new node as head
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        // Нужно найти Node где next=null
        let last = this.head;
        while (last.next !== null) {
            last = last.next;
        }
        // Изменяем next в последней node
        last.next = newNode;
    } 
 
    print() {
        let node = this.head;
        while (node !== null) {
            console.log(node.getData() + " ");
            node = node.getNext();
        }
    }
}

let list = new LinkedList();
console.log(" - pushFirst - "); 
list.pushFirst(5);
list.pushFirst(3);
list.pushFirst(6);
list.print();

console.log(" - removeFirst - "); 
list.removeFirst();
list.print();

console.log(" - pushLast - "); 
list.pushLast(77);
list.print();