/**
  * CTCI 2.5
  * You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored
  * in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers
  * and returns the sum as a linked list.
  */

import LinkedList from 'LinkedList';

class LinkedListInteger {
    constructor(value = 0) {
        this.value = value;
    }

    add = (other) => this.value += other.value

    divide = (other) => this.value /= other.value

    multiply = (other) => this.value *= other.value

    subtract = (other) => this.value -= other.value

    get value() {
        let multiplier = 1;
        let current = this.list.getHead();
        let value = 0;

        while (current) {
            value += (multiplier * current.element);

            multiplier *= 10;
            current = current.next;
        }

        return value;
    }

    set value(value) {
        this.list = new LinkedList();

        if (value < 0) {
            this.sign = -1;
        } else {
            this.sign = 1;
        }

        if (value === 0) {
            this.list.append(0);
        }

        while (value > 0) {
            const digit = value % 10;

            this.list.append(digit);

            value -= digit;
            value /= 10;
        }

        return this.value * this.sign;
    }
}

export default LinkedListInteger;
