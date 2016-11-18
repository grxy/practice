import HashTable from './HashTable';
import ValuePair from 'ValuePair';

class HashTableLinearProbing extends HashTable {
    get = (key) => {
        const index = this.hash(key);
        let element = this.table[index];

        if (element !== undefined) {
            if (element.key === key) {
                return element.value;
            } else {
                let i = index + 1;

                while ((this.table[i] === undefined || this.table[i].key !== key) && i < this.table.length) {
                    element = this.table[i];

                    i++;
                }

                if (element && element.key === key) {
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

                while ((this.table[i] === undefined || this.table[i].key !== key) && i < this.table.length) {
                    i++;
                }

                if (this.table[i] && this.table[i].key === key) {
                    const { value } = this.table[i];
                    this.table[i] = undefined;

                    return value;
                }
            }
        }
    }
}

export default HashTableLinearProbing;
