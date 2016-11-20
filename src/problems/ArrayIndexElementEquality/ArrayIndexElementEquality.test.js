import ArrayIndexElementEquality from './ArrayIndexElementEquality';

describe('ArrayIndexElementEquality', () => {
    const cases = [
        [[-8, -7, 0 , 2, 4], 4],
        [[0, 3, 5, 7, 10], 0],
        [[0, 5, 7], 0],
        [[1, 2, 3], -1],
        [[-8, -7, -6], -1],
        [[-8, -7, 2, 4, 5, 6, 7, 8, 9, 10], 2]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [ input, output ] = cases[i];
        it(`${input} returns ${output}`, () => {
            expect(ArrayIndexElementEquality.run(input)).toEqual(output);
        });
    }

    const throwCases = [{}, 123, 'test', true, null, undefined];

    for (let i = 0; i < throwCases.length; i++) {
        const input = throwCases[i];

        it(`returns -1 when the input is ${JSON.stringify(input)}`, () => {
            expect(ArrayIndexElementEquality.run(input)).toBe(-1);
        });
    }
});
