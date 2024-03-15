export default class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    
    //method to add elements to the stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //check stack size
    size() {
        return this.count;
    }

    //check if the stack is empty
    isEmpty() {
        return this.count === 0;
    }

    //method to remove elements to the stack
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    //return the top element
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    //clean the stack
    clear() {
        this.items = {};
        this.count = 0;
    }

    //returns the stack as a string
    toString() {
        if(this.isEmpty()) {
            return "";
        }

        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString;
    }
}