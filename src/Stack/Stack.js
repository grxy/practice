class Stack {
    items = []

    clear = () => {
        this.items = [];
    }

    isEmpty = () => !this.items.length;

    peek = () => this.items.length ? this.items[this.items.length - 1] : undefined

    pop = () => this.items.pop()

    print = () => {
        // eslint-disable-next-line no-console
        console.log(this.toString());
    }

    push = (item) => {
        this.items.push(item);
    }

    size = () => this.items.length;

    toString = () => this.items.toString()
}

export default Stack;
