import Graph from './Graph';

describe('Graph', () => {
    it('implement', () => {
        const g = new Graph(6);

        g.addEdge(0, 2);
        g.addEdge(0, 3);
        g.addEdge(1, 3);
        g.addEdge(1, 4);
        g.addEdge(2, 5);
        g.addEdge(5, 4);

        g.print();

        g.aStar();
    });
});
