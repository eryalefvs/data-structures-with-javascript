import LinkedList from "./linkedList";
import DoublyNode from "./models/doubly-linked-list-models";

export default class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    insert(element, index) {
        if (index >= 0 & index < this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head === null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            }
        }
        return undefined;
    }
}