class Fibonacci {
    static get = (n) => {
        if (n < 1) {
            return -1;
        } else if (n < 3) {
            return 1;
        }

        let x = 1;
        let y = 1;

        for (let i = 3; i < n; i++) {
            const temp = y;
            y = x + y;
            x = temp;
        }

        return x + y;
    }
}

export default Fibonacci;
