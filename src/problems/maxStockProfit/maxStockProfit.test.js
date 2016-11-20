import maxStockProfit from './maxStockProfit';

describe('maxStockProfit', () => {
    const cases = [
        [[1, 2, 3, 4, 5, 6], 5],
        [[11, 1, 2, 3, 4, 5], 4],
        [[15, 10, 4, 2, 1], -1],
        [[2, 2], 0],
        [[1, 100], 99],
        [[100, 1], -99]
    ];

    for (let i = 0; i < cases.length; i++) {
        const [ input, output ] = cases[i];
        it(`${input} returns ${output}`, () => {
            expect(maxStockProfit(input)).toEqual(output);
        });
    }

    it('throws when the input is not long enough', () => {
        const throws = () => {
            maxStockProfit([1]);
        };

        expect(throws).toThrow();
    });
});
