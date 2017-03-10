import permutations from './permutations';

describe('permutations', () => {
    const cases = [
        ['a', ['a']],
        [[1], [[1]]],
        [[0, 1], [[0, 1], [1, 0]]],
        ['01', ['01', '10']],
        [[0, 1, 2], [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]],
        [null, [null]],
        [undefined, [undefined]],
        [{}, [{}]],
        [123, [123]],
        [false, [false]]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [ input, output ] = cases[i];
        it(`${JSON.stringify(input)} returns ${JSON.stringify(output)}`, () => {
            expect(permutations(input)).toEqual(expect.arrayContaining(output));
        });
    }
});
