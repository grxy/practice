import Stack from 'Stack';

class StackSet {
    constructor(stackSize) {
        if (typeof stackSize !== 'number' || stackSize < 1) {
            throw new Error('stackSize must be at least 1.');
        }

        this.stackSize = stackSize;
    }

    stacks = [new Stack()]

    isEmpty = () => !this.size()

    pop = () => {
        const last = this.stacks[this.stacks.length - 1];
        const item = last.pop();

        if (this.stacks.length > 1 && last.size() === 0) {
            this.stacks.pop();
        }

        return item;
    }

    push = (item) => {
        if (this.stacks[this.stacks.length - 1].size() === this.stackSize) {
            this.stacks.push(new Stack());
        }

        this.stacks[this.stacks.length - 1].push(item);
    }

    size = () => {
        let count = this.stacks[this.stacks.length - 1].size();

        if (this.stacks.length > 1) {
            count += (this.stacks.length - 1) * this.stackSize;
        }

        return count;
    }
}

export default StackSet;
