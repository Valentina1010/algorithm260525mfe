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

    // --- Домашнее задание ---


    removeLast() {
        if (this.head === null) {
            console.log("List is Empty");
            return false;
        }

        let current = this.head;
        let previous = null;

        if (current.next === null) { // one element
            this.head = null;
        } else {
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }

            if (previous !== null) {
                previous.next = null; // remove last node
            }
        }
        return true;
    }

    pushToIndex(index, data) {
        let newNode = new Node(data);
        let current = this.head;
        let jump;

        if (index < 1) {
            console.log("index out of bounds");
            return false;
        } else {
            jump = 0;
            while (jump < index - 1) {
                current = current.next;
                jump++;
            }

            newNode.next = current.next;
            current.next = newNode;

            return true;
        }
    }

    remove(index) {
        let current = this.head;
        let jump;
        if (index < 1) {
            console.log("index out of bounds");
            return false;
        } else {
            jump = 0;
            while (jump < index - 1) {
                current = current.next;
                jump++;
            }
            current.next = current.next.next;
            return true;
        }
    }

    size() { //O(n) -> O(1)
        let node;
        let size = 0;
        for (node = this.head; node !== null; node = node.getNext()) {
            size++;
        }
        return size;
    }

    get(index) {
        let jump = -1;
        if (this.head === null) {
            return -1;
        }
        if (index < 0 || index > this.size()) { //O(n)
            return -1;
        }
        let node = this.head;
        while (node !== null) {
            jump++;
            if (jump === index) {
                return node.data;
            }
            node = node.next;
        }

        return -1;
    }

    detectLoopFloyd() {  // в списке c повторяющимися значениями 
        let slow = head;
        let fast = head;

        // Используем алгоритм Флойда для обнаружения петли
        while (fast != null && fast.next != null) {
            slow = slow.next;      // Медленный указатель движется на один узел
            fast = fast.next.next;  // Быстрый указатель движется на два узла

            // Если быстрый и медленный указатели встречаются, значит, есть петля
            if (slow == fast) {
                return true;
            }
        }

        // Если мы дошли до конца списка без обнаружения петли
        return false;
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