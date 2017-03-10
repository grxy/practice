import Queue from 'queue';

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adj = [];

        for (let i = 0; i < vertices; i++) {
            this.adj.push([]);
        }
    }

    edges = 0

    marked = []

    addEdge = (v, w) => {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    aStar = () => {}

    bfs = (v) => {
        const q = new Queue();
        const marked = [];

        const distances = (new Array(this.vertices)).fill(0);
        const predecessors = (new Array(this.vertices)).fill(null);

        marked[v] = true;
        q.enqueue(v);

        while (!q.isEmpty()) {
            const u = q.dequeue();

            this.adj[u].forEach((w) => {
                if (!marked[w]) {
                    marked[w] = true;

                    distances[w] = distances[u] + 1;
                    predecessors[w] = u;

                    q.enqueue(w);
                }
            });
        }

        return {
            distances,
            predecessors
        };
    }

    bfsPaths = (source) => {
        const { predecessors } = this.bfs(source);
        const paths = [];

        for (let dest = 0; dest < this.vertices; dest++) {
            let path = null;
            let current = dest;

            if (source === dest) {
                paths.push([]);
                continue;
            }

            while (typeof predecessors[current] === 'number') {
                path = path || [];

                path.unshift(current);
                current = predecessors[current];
            }

            paths.push(path);
        }

        return paths;
    }

    dfs = () => {
        const result = {
            discovery: (new Array(this.vertices)).fill(0),
            finished: (new Array(this.vertices)).fill(0),
            marked: [],
            predecessors: (new Array(this.vertices)).fill(null),
            time: 0
        };

        for (let i = 0; i < this.vertices; i++) {
            if (!result.marked[i]) {
                this.dfsVisit(i, result);
            }
        }

        return result;
    }

    dfsSimple = (v, marked = []) => {
        marked[v] = true;

        this.adj[v].forEach((w) => {
            if (!marked[w]) {
                this.dfs(w, marked);
            }
        });
    }

    dfsVisit = (u, result) => {
        result.marked[u] = true;
        result.discovery[u] = ++result.time;

        this.adj[u].forEach((w) => {
            if (!result.marked[w]) {
                result.predecessors[w] = u;
                this.dfsVisit(w, result);
            }
        });

        result.finished[u] = ++result.time;
    }

    print = () => {
        console.log(this.toString());
    }

    toString = () => {
        let str = '';

        for (let i = 0; i < this.vertices; i++) {
            str += `${i} ->`;

            for (let j = 0; j < this.adj[i].length; j++) {
                str += ` ${this.adj[i][j]}`;
            }

            str += '\n';
        }

        return str;
    }
}

export default Graph;
