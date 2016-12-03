import IslandCounter from './IslandCounter';

describe('IslandCounter', () => {
    const cases = [
        [
            [],
            0
        ],
        [
            [
                []
            ],
            0
        ],
        [
            [
                [0]
            ],
            0
        ],
        [
            [
                [0, 1]
            ],
            1
        ],
        [
            [
                [1, 1]
            ],
            1
        ],
        [
            [
                [1],
                [0]
            ],
            1
        ],
        [
            [
                [0],
                [1]
            ],
            1
        ],
        [
            [
                [0, 1, 1],
                [1, 0, 0]
            ],
            2
        ],
        [
            [
                [0, 1, 0, 1, 0],
                [0, 0, 1, 1, 1],
                [1, 0, 0, 1, 0],
                [0, 1, 1, 0, 0],
                [1, 0, 1, 0, 1]
            ],
            6
        ]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [input, output] = cases[i];
        const m = input.length;
        const n = input.length ? input[0].length : 0;

        it(`works for a ${m}x${n} matrix`, () => {
            const counter = new IslandCounter(input);
            expect(counter.getCount()).toEqual(output);
        });
    }
});
