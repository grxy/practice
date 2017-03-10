class Queue {
    items = []

    dequeue = () => {
        return this.items.shift();
    }

    enqueue = (element) => {
        this.items.push(element);
    }

    front = () => {
        return this.items[0];
    }

    isEmpty = () => !this.items.length

    print = () => {
        console.log(this.items.toString());
    }

    size = () => this.items.length
}

export default Queue;
