class Node {
    constructor(element) {
        this.element = element;
    }

    next = null
}

class LinkedList {
    head = null;
    length = 0;

    append = (element) => {
        const node = new Node(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    getHead = () => this.head

    indexOf = (element) => {
        let current = this.head;
        let index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    }

    insert = (index, element) => {
        if (index >= 0 && index <= this.length) {
            const node = new Node(element);
            let current = this.head;
            let previous;
            let i = 0;

            if (index === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (i++ < index) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            this.length++;

            return true;
        }

        return false;
    }

    isEmpty = () => this.length === 0

    remove = (element) => {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    removeAt = (index) => {
        if (index >= 0 && index < this.length) {
            let current = this.head;
            let previous;
            let i = 0;

            if (index === 0) {
                this.head = current.next;
            } else {
                while (i++ < index) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }

            this.length--;

            return current.element;
        }

        return null;
    }

    size = () => this.length

    toString = () => {
        let current = this.head;
        let string = '';

        while (current) {
            string += current.element + (current.next ? ' n ' : '');
            current = current.next;
        }

        return string;
    }
}

export default LinkedList;
