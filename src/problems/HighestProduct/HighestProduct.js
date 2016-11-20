class HighestProduct {
    constructor(k) {
        if (typeof k !== 'number' || k < 1) {
            throw new Error('k must be a number greater than 0.');
        }

        this.k = k;
    }

    run = (arr) => {
        if (!Array.isArray(arr)) {
            throw new Error('arr must be an array.');
        }

        const { length } = arr;
        const { k } = this;


        if (length < k) {
            throw new Error(`arr must have at least ${k} items.`);
        }

        let highestProduct = 1;
        let highestProductK = 1;
        let lowestProduct = 1;

        let highest = -Infinity;
        let lowest = Infinity;

        for (let i = 0; i < k - 1; i++) {
            const val = arr[i];

            highest = Math.max(highest, val);
            lowest = Math.min(lowest, val);

            highestProduct *= val;
            lowestProduct *= val;
        }

        for (let i = 0; i < k; i++) {
            const val = arr[i];

            highestProductK *= val;
        }

        // loop from k to length
        for (let i = k; i < length; i++) {
            const val = arr[i];

            highestProductK = Math.max(
                highestProductK,
                val * highestProduct,
                val * lowestProduct
            );

            highestProduct = Math.max(
                highestProduct,
                val * highest,
                val * lowest
            );

            lowestProduct = Math.min(
                lowestProduct,
                val * highest,
                val * lowest
            );

            highest = Math.max(highest, val);
            lowest = Math.max(lowest, val);
        }

        return highestProductK;
    }
}

export default HighestProduct;
