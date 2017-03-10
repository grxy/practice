import Queue from './Queue';
import QueueElement from './QueueElement';

class PriorityQueue extends Queue {
    enqueue = (element, priority) => {
        let qe = new QueueElement(element, priority);

        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (qe.priority < this.items[i].priority) {
                this.items.splice(i, 0, qe);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(qe);
        }
    }

    print = () => {
        for (let i = 0; i < this.items.length; i++) {
            const { element, priority } = this.items[i];
            console.log(`${element} - ${priority}`);
        }
    }
}

export default PriorityQueue;
