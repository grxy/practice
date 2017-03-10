import flatten from './flatten';

describe('flatten', () => {
    const cases = [
        [[], []],
        [[0], [0]],
        [[0, [1, [2], [3]], [], [], undefined], [0, 1, 2, 3, undefined]],
        [null, undefined],
        [undefined, undefined],
        ['test', undefined],
        [123, undefined],
        [true, undefined]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [ input, output ] = cases[i];
        it(`${JSON.stringify(input)} returns ${JSON.stringify(output)}`, () => {
            expect(flatten(input)).toEqual(output);
        });
    }
});
