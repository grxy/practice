import mergeSort from './mergeSort';

describe('mergeSort', () => {
    it('implement', () => {
        const arr = [1, 7, 3, 2, -10];

        mergeSort(arr);

        console.log(arr);
    });
});
