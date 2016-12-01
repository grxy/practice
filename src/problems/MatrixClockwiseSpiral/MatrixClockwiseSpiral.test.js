import MatrixClockwiseSpiral from './MatrixClockwiseSpiral';

describe('MatrixClockwiseSpiral', () => {
    const cases = [
        [
            [],
            []
        ],
        [
            [
                []
            ],
            []
        ],
        [
            [
                [1]
            ],
            [1]
        ],
        [
            [
                [1, 2, 3]
            ],
            [1, 2, 3]
        ],
        [
            [
                [1],
                [2],
                [3]
            ],
            [1, 2, 3]
        ],
        [
            [
                [1, 2],
                [4, 3]
            ],
            [1, 2, 3, 4]
        ],
        [
            [
                [1, 2, 3],
                [4, 5, 6]
            ],
            [1, 2, 3, 6, 5, 4]
        ],
        [
            [
                [1, 2],
                [3, 4],
                [5, 6]
            ],
            [1, 2, 4, 6, 5, 3]
        ],
        [
            [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ],
            [1, 2, 3, 6, 9, 8, 7, 4, 5]
        ],
        [
            [
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8],
                [1, 2, 3, 4, 5, 6, 7, 8]
            ],
            [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7]
        ]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [input, output] = cases[i];
        const m = input.length;
        const n = input.length ? input[0].length : 0;

        it(`works for a ${m}x${n} matrix`, () => {
            expect(MatrixClockwiseSpiral.run(input)).toEqual(output);
        });
    }
});
