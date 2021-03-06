import HashTable from './HashTable';
import LinkedList from 'LinkedList';
import ValuePair from 'ValuePair';

class HashTableSeparateChaining extends HashTable {
    get = (key) => {
        const index = this.hash(key);

        if (this.table[index] !== undefined) {
            let current = this.table[index].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }

                current = current.next;
            }

            if (current.element.key === key) {
                return current.element.value;
            }
        }
    }

    put = (key, value) => {
        const index = this.hash(key);

        if (this.table[index] === undefined) {
            this.table[index] = new LinkedList();
        }

        this.table[index].append(new ValuePair(key, value));
    }

    remove = (key) => {
        const index = this.hash(key);
        const list = this.table[index];

        if (list !== undefined) {
            let current = list.getHead();

            while (current.next) {
                if (current.element.key === key) {
                    const { value } =  list.remove(current.element);

                    if (list.isEmpty()) {
                        this.table[index] = undefined;
                    }

                    return value;
                }

                current = current.next;
            }

            if (current.element.key === key) {
                const { value } =  list.remove(current.element);

                if (list.isEmpty()) {
                    this.table[index] = undefined;
                }

                return value;
            }
        }
    }
}

export default HashTableSeparateChaining;
