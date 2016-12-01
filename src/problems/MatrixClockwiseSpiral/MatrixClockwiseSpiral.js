class MatrixClockwiseSpiral {
    static run = (matrix) => {
        const output = [];

        let m = matrix.length;
        let n = matrix.length ? matrix[0].length : 0;

        let x = 0;
        let y = 0;

        // while there are remaining columns or rows
        while(y < m && x < n) {
            // add first row
            for (let i = x; i < n; i++) {
                output.push(matrix[y][i]);
            }
            y++;

            // add last column
            for (let i = y; i < m; i++) {
                output.push(matrix[i][n - 1]);
            }
            n--;

            // add last row
            if (y < m) {
                for (let i = n - 1; i >= x; i--) {
                    output.push(matrix[m - 1][i]);
                }

                m--;
            }

            // add first column
            if (x < n) {
                for (let i = m - 1; i >= y; i--) {
                    output.push(matrix[i][x]);
                }
                x++;
            }
        }

        return output;
    }
}

export default MatrixClockwiseSpiral;
