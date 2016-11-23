import MergeSortedArrays from './MergeSortedArrays';

describe('MergeSortedArrays', () => {
    // [[...inputs], output]
    const cases = [
        [[[], [1, 2, 3, 4]], [1, 2, 3, 4]],
        [[[1, 2, 3, 4], []], [1, 2, 3, 4]],
        [[[], []], []],
        [[[1, 3, 5, 7, 9], [0, 2, 4, 6, 8, 10]], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
        [
            [['apple', 'dessert', 'eagle'], ['bacon', 'cheese', 'custard']],
            ['apple', 'bacon', 'cheese', 'custard', 'dessert', 'eagle']
        ],
        [[[1, 3, 5], [2, 4, 6], [0, 7, 9]], [0, 1, 2, 3, 4, 5, 6, 7, 9]]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [inputs, output] = cases[i];

        it(`returns ${JSON.stringify(output)} for inputs ${JSON.stringify([...inputs])}`, () => {
            expect(MergeSortedArrays.run(...inputs)).toEqual(output);
        });
    }
});
