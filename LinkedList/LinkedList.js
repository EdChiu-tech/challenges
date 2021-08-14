// Design Linked List

// Solution
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3

const Node = function (val, next = null) {
    this.val = val
    this.next = next
};

// Initialize your data structure here.

const MyLinkedList = function () {
    this.head = null;
    this.size = 0
};

// Get the value of the index-th node in the linked list. If the index is invalid, return -1. 

MyLinkedList.prototype.get = function (index) {
    let current = this.head;
    let count = 0

    while(current){
        if( count === index){
            return current.val
        }
        count++;
        current = current.next;
    }

    return -1
};


// Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 

MyLinkedList.prototype.addAtHead = function (val) {
    this.head = new Node(val, this.head)
    this.size++
    return
};

// Append a node of value val to the last element of the linked list. 

MyLinkedList.prototype.addAtTail = function (val) {
    let node = new Node(val);
    let current;
    if (!this.head) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++
    return
};

// Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > 0 && index > this.size) {
        return;
    };

    if (index === 0) {
        this.addAtHead(val);
        return
    };
    
    const node = new Node(val);
    let current, previous;
    let count = 0;

    current = this.head;
    while (count < index) {
        previous = current;
        count++;
        current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
    return val;
};

// Delete the index-th node in the linked list, if the index is valid. 

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if ( index < 0 || index >= this.size){
        return
    }

    let current = this.head;
    let previous;
    let count = 0;

    if( index === 0){
        this.head = current.next;
    } else {
        while(count < index){
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }
    return
};

const ll = new MyLinkedList();
ll.addAtHead(100);
console.log(ll)

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */