import TicTacWin from './TicTacWin';

describe('TicTacWin', () => {
    describe('win boards', () => {
        const boards = [
            [
                ['X', 'O', 'X'],
                ['X', 'X', 'O'],
                ['O', 'O', 'X'],
            ],
            [
                ['X', 'O', 'X'],
                ['X', 'O', 'O'],
                ['X', 'X', 'O'],
            ],
            [
                ['X', 'X', 'X'],
                ['X', 'O', 'O'],
                ['O', 'X', 'O'],
            ],
            [
                ['X', 'X', 'X', 'X'],
                ['X', 'O', 'O', 'X'],
                ['O', 'X', 'O', 'O'],
                ['O', 'X', 'O', 'O']
            ]
        ];

        boards.forEach((board) => {
            it('contains a winning combination', () => {
                expect(TicTacWin(board)).toBe(true);
            });
        });
    });

    describe('no win boards', () => {
        const boards = [
            [
                ['X', 'O', 'O'],
                ['O', 'X', 'X'],
                ['X', 'O', 'O']
            ],
            [
                ['X', 'O', 'O', 'X'],
                ['O', 'X', 'X', 'O'],
                ['X', 'O', 'O', 'X'],
                ['X', 'O', 'O', 'X']
            ]
        ];

        boards.forEach((board) => {
            it('does not contain a winning combination', () => {
                expect(TicTacWin(board)).toBe(false);
            });
        });
    });
});
