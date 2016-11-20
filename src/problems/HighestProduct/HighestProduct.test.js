import HighestProduct from './HighestProduct';

describe('HighestProduct', () => {

    // [k, input, output]
    const cases = [
        [2, [1, 5, -10, -10], 100],
        [3, [1, 5, 8, -25], 40],
        [4, [8, 7, 6, 5, -99, 1, 3], 1680]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [k, input, output] = cases[i];

        it(`returns ${output} with input (${k}, ${input})`, () => {
            const instance = new HighestProduct(k);

            expect(instance.run(input)).toEqual(output);
        });
    }

    const constructorThrows = [0, -99, 'test', {}, null, undefined, true];

    for (let i = 0; i < constructorThrows.length; i++) {
        const k = constructorThrows[i];

        it(`throws when ${JSON.stringify(k)} is passed to the constructor`, () => {
            const throws = () => {
                new HighestProduct(k);
            };

            expect(throws).toThrow();
        });
    }

    // [k, input]
    const runThrows = [
        [2, null],
        [2, {}],
        [2, undefined],
        [2, true],
        [2, 4],
        [2, 'test'],
        [3, [1]]
    ];

    for (let i = 0; i < runThrows.length; i++) {
        const [k, input] = runThrows[i];

        it(`throws when instantiated with ${k} and run with ${JSON.stringify(input)}`, () => {
            const throws = () => {
                const instance = new HighestProduct(k);
                instance.run(input);
            };

            expect(throws).toThrow();
        });
    }
});
