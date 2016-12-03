/*
 * Given a 2D matrix M, filled with either 0s or 1s, count the number of islands of 1s in M.
 * An island is a group of adjacent values that are all 1s. Every cell in M can be adjacent
 * to the 4 cells that are next to it on the same row or column.
 */

class IslandCounter {
    constructor (matrix) {
        this.matrix = matrix;
    }

    count = 0

    getCount = () => {
        const [ m, n ] = this.getDimensions();

        for (let i = 0; i < m; i++) { // iterate over y
            for (let j = 0; j < n; j++) { // iterate over x
                const current = this.matrix[i][j];

                if (current === -1) { // already marked, so mark neighbors
                    this.markAll(i, j);
                } else if (current === 1) {
                    this.count++;
                    this.markAll(i, j);
                }

            }
        }

        return this.count;
    }

    getDimensions = () => [this.matrix.length, this.matrix.length ? this.matrix[0].length : 0]

    mark = (i, j) => {
        const [ m, n ] = this.getDimensions();

        if (i >= 0 && i < m && j >= 0 && j < n ) {
            if (this.matrix[i][j] === 1) {
                this.matrix[i][j] = -1;

                this.markAll(i, j);
            }
        }
    }

    markAll = (i, j) => {
        this.mark(i, j); // mark current
        this.mark(i - 1, j); // mark top
        this.mark(i, j + 1); // mark right
        this.mark(i + 1, j); // mark bottom
        this.mark(i, j - 1); // mark left
    }
}

export default IslandCounter;
