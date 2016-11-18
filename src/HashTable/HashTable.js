class HashTable {
    constructor(hash) {
        if (typeof hash !== 'function') {
            throw new Error('hash must be a function');
        }

        this.hash = (key) => {
            if (typeof key !== 'string') {
                throw new Error('key must be a string');
            }

            return hash(key);
        };
    }

    table = []

    clear = () => {
        this.table = [];
    }

    has = (key) => this.get(key) !== undefined

    get = (key) => this.table[this.hash(key)]

    put = (key, value) => {
        this.table[this.hash(key)] = value;
    }

    remove = (key) => {
        if (this.has(key)) {
            const index = this.hash(key);
            const value = this.table[index];

            this.table[index] = undefined;
            return value;
        }
    }
}

export default HashTable;
