import quickSort from './quickSort';

describe('quickSort', () => {
    it('implement', () => {
        let arr = [1, 7, 3, 2, -10];

        arr = quickSort(arr);

        console.log(arr);
    });
});
