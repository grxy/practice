import { comboSumsToX } from './sum';

xdescribe('comboSumsToX', () => {
    var tests = [
        [[1, 2, 3], 1, true],
        [[3, 2, 1], 1, true],
        [[1, 2, 3], 6, true],
        [[3, 2, 1], 6, true],
        [[1, 2, 3], 7, false],
        [[3, 2, 1], 7, false],
        [null, 0, false],
        [undefined, 0, false],
        [NaN, 0, false],
        [{}, 0, false],
        [1234, 0, false],
        [true, 0, false],
        [false, 0, false]
    ];

    tests.forEach((test) => {
        let [input, x, output] = test;

        it(`returns ${output} when called with ${JSON.stringify(input)}, ${x}`, () => {
            expect(comboSumsToX(input, x)).toBe(output);
        });
    });
});
