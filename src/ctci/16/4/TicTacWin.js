const TicTacWin = (board) => {
    if (hasWinnerDiagonal(board)) {
        return true;
    }

    for (let i = 0; i < board.length; i++) {
        if (hasWinnerRowCol(board, i)) {
            return true;
        }
    }

    return false;
};

const hasWinnerDiagonal = (board) => {
    let left = true;
    let right = true;

    for (let i = 1; i < board.length; i++) {
        if (board[i][i] !== board[i - 1][i - 1]) {
            left = false;
        }

        if (board[i][board.length - i - 1] !== board[i - 1][board.length - i]) {
            right = false;
        }

        if (!left && !right) {
            return false;
        }
    }

    return left || right;
};

const hasWinnerRowCol = (board, index) => {
    for (let i = 1; i < board.length; i++) {
        let row = true;
        let col = true;

        if (board[index][i] !== board[index][i - 1]) {
            row = false;
        }

        if (board[i][index] !== board[i - 1][index]) {
            col = false;
        }

        if (i === board.length - 1) {
            return row || col;
        } else if (!row && !col) {
            return false;
        }
    }
};

export default TicTacWin;
