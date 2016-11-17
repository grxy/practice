import * as hashes from 'hash/functions';
import * as tables from 'HashTable';

let table;
let hash;

for (const tableKey in tables) {
    const HashTable = tables[tableKey];

    describe(HashTable.name, () => {
        for (const hashKey in hashes) {
            hash = hashes[hashKey];

            describe(`with ${hash.name}() hash function`, () => {
                beforeEach(() => {
                    table = new HashTable(hash);
                });

                describe('get()', () => {
                    it('should get what is put', () => {
                        const key = 'key';
                        const value = 'value';

                        table.put(key, value);

                        expect(table.get(key)).toBe(value);
                    });

                    it('should not contain what has not been put', () => {
                        expect(table.get('blah')).toBe(undefined);
                    });
                });

                describe('put()', () => {
                    it('should contain what is put', () => {
                        const key = 'testkey';
                        const value = 'testvalue';

                        table.put(key, value);

                        expect(table.has(key)).not.toBe(undefined);
                    });

                    it('should not contain what has not been put', () => {
                        expect(table.has('key')).toBe(false);
                    });
                });

                describe('remove()', () => {
                    const key = 'test';
                    const value = 'test';

                    beforeEach(() => {
                        table.put(key, value);
                    });

                    it('should remove the element by key', () => {
                        table.remove(key);
                        expect(table.has(key)).toBe(false);
                    });

                    it('should return the element', () => {
                        expect(table.remove(key)).toBe(value);
                    });
                });
            });
        }
    });
}
