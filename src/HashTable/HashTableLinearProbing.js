import ValuePair from 'ValuePair';

class HashTableLinearProbing {
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

    has = (key) => this.get(key) !== undefined

    get = (key) => {
        const index = this.hash(key);
        let element = this.table[index];

        if (element !== undefined) {
            if (element.key === key) {
                return element.value;
            } else {
                let i = index + 1;

                while ((element = this.table[i]) === undefined || element.key !== key) {
                    i++;
                    element = this.table[i];
                }

                if (element.key === key) {
                    return element.value;
                }
            }
        }
    }

    put = (key, value) => {
        const index = this.hash(key);

        const element = new ValuePair(key, value);

        if (this.table[index] === undefined) {
            this.table[index] = element;
        } else {
            let i = index + 1;

            while (this.table[i] !== undefined) {
                i++;
            }

            this.table[i] = element;
        }

    }

    remove = (key) => {
        const index = this.hash(key);

        if (this.table[index] !== undefined) {
            if (this.table[index].key === key) {
                const { value } = this.table[index];
                this.table[index] = undefined;

                return value;
            } else {
                let i = index + 1;

                while (this.table[i] === undefined || this.table[i].key !== key) {
                    i++;
                }

                if (this.table[i].key === key) {
                    const { value } = this.table[i];
                    this.table[i] = undefined;

                    return value;
                }
            }
        }
    }
}

export default HashTableLinearProbing;
