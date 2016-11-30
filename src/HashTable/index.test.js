import * as hashes from 'hash/functions';
import * as tables from 'HashTable';

let table;

for (const tableKey in tables) {
    const HashTable = tables[tableKey];

    describe(HashTable.name, () => {
        it('throws when initialized with a non-function', () => {
            const throws = () => {
                table = new HashTable({});
            };

            expect(throws).toThrow();
        });

        for (let hashKey in hashes) {
            describe(`with ${hashKey}() hash function`, () => {
                beforeEach(() => {
                    table = new HashTable(hashes[hashKey]);
                });

                describe('clear()', () => {
                    beforeEach(() => {
                        table.put('test5', true);
                    });

                    it('clears the stack', () => {
                        expect(table.has('test5')).toBe(true);
                        table.clear();
                        expect(table.has('test5')).toBe(false);
                    });

                    it('creates a new table array', () => {
                        let oldTable = table.table;
                        table.clear();
                        expect(table.table).not.toBe(oldTable);
                    });
                });

                describe('get()', () => {
                    it('gets what is put', () => {
                        const key = 'test1';
                        const value = 'value';

                        table.put(key, value);
                        expect(table.get(key)).toBe(value);
                    });

                    it('does not contain what has not been put', () => {
                        expect(table.get('test3')).toBe(undefined);
                    });
                });

                describe('hash()', () => {
                    it('returns the hashed value of a string', () => {
                        expect(table.hash('test')).toBe(hashes[hashKey]('test'));
                    });

                    [{}, 123, true, undefined].forEach((value) => {
                        it(`throws when called with ${typeof value} (${JSON.stringify(value)})`, () => {
                            const throws = () => {
                                table.hash(value);
                            };

                            expect(throws).toThrow();
                        });
                    });
                });

                describe('put()', () => {
                    it('contains what is put', () => {
                        const key = 'testkey';
                        const value = 'testvalue';

                        table.put(key, value);

                        expect(table.has(key)).toBe(true);
                    });

                    it('does not contain what has not been put', () => {
                        expect(table.has('test9')).toBe(false);
                    });
                });

                describe('remove()', () => {
                    const key = 'testrandom3';
                    const value = true;

                    beforeEach(() => {
                        table.put('testrandom2', true);
                        table.put('testrandom3', true);
                    });

                    it('removes the element by key', () => {
                        table.remove('testrandom3');
                        expect(table.has('testrandom3')).toBe(false);
                    });

                    it('returns the removed element', () => {
                        table.put(key, value);
                        expect(table.remove(key)).toBe(value);
                    });

                    it('returns undefined when the key does not exist', () => {
                        table.remove('testrandom3');
                        expect(table.remove('testrandom3')).toBe(undefined);
                    });
                });
            });
        }
    });
}
