import PriorityQueue from './PriorityQueue';
import Queue from './Queue';

describe('PriorityQueue', () => {
    it('works', () => {
        let q = new PriorityQueue();

        q.enqueue(1, 10);
        q.enqueue(2, 9);
        q.enqueue(3, 8);
        q.enqueue(4, 3);
        q.enqueue(1, 6);
        q.enqueue(2);

        q.print();
        console.log(q.dequeue());

        q = new Queue();

        q.enqueue(1, 10);
        q.enqueue(2, 9);
        q.enqueue(3, 8);
        q.enqueue(4, 3);
        q.enqueue(1, 6);
        q.enqueue(2, 6);

        q.print();
        console.log(q.dequeue());

        // console.log(q.dequeue());
    });
});
