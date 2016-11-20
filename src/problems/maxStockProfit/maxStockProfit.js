class MaxStockProfit {
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
    **/
    static run = (prices) => {
        const n = prices.length;

        if (n < 2) {
            throw new Error('We must have at least 2 prices.');
        }

        let minPrice = prices[0];
        let maxProfit = prices[1] - prices[0];

        for (let i = 1; i < n; i++) {
            const currentPrice = prices[i];
            const potentialProfit = currentPrice - minPrice;

            maxProfit = Math.max(maxProfit, potentialProfit);
            minPrice = Math.min(minPrice, currentPrice);
        }

        return maxProfit;
    }
}

export default MaxStockProfit;
