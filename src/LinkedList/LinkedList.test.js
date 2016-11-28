import LinkedList from 'LinkedList';

let list;

describe('LinkedList', () => {
    beforeEach(() => {
        list = new LinkedList();
    });

    describe('append()', () => {
        beforeEach(() => {
            list.append(99);
        });

        it('sets the head', () => {
            expect(list.head.element).toBe(99);
        });

        it('updates the length', () => {
            expect(list.length).toBe(1);
        });

        it('appends to the end of the list', () => {
            list.append(22);
            expect(list.indexOf(22)).toBe(1);
        });
    });

    describe('getHead()', () => {
        it('is null by default', () => {
            expect(list.getHead()).toBe(null);
        });

        it('sets the head when a node is appended', () => {
            list.append(72);
            expect(list.getHead().element).toBe(72);
        });
    });

    describe('insert()', () => {
        beforeEach(() => {
            list.insert(0, 42);
        });

        it('sets the head', () => {
            expect(list.getHead().element).toBe(42);
        });

        it('inserts between elements', () => {
            list.insert(0, 22);
            expect(list.indexOf(22)).toBe(0);
            expect(list.indexOf(42)).toBe(1);
        });

        it('returns false when the index is out of range', () => {
            expect(list.insert(999, 999)).toBe(false);
        });

        it('returns true when the insert is successfull', () => {
            expect(list.insert(list.length)).toBe(true);
        });
    });

    describe('isEmpty()', () => {
        it('returns true when there are no items', () => {
            expect(list.isEmpty()).toBe(true);
        });

        it('returns false when there are items', () => {
            list.append(22);
            expect(list.isEmpty()).toBe(false);
        });
    });

    describe('kthToLast()', () => {
        beforeEach(() => {
            list.append(123);
            list.append(456);
            list.append(789);
            list.append(0);
            list.append(5);
        });

        it('returns null when k < 0', () => {
            expect(list.kthToLast(-1)).toBe(null);
        });

        it('returns null when k > list length', () => {
            expect(list.kthToLast(999)).toBe(null);
        });

        it('returns the last item when k === 0', () => {
            expect(list.kthToLast(0).element).toBe(5);
        });

        it('returns the first item when k === length - 1', () => {
            expect(list.kthToLast(list.size() - 1)).toBe(list.getHead());
        });

        it('returns the correct item', () => {
            expect(list.kthToLast(1).element).toBe(0);
        });
    });

    describe('remove()', () => {
        it('removes the element', () => {
            list.append(33);
            list.remove(33);

            expect(list.indexOf(33)).toBe(-1);
        });

        it('returns the removed element', () => {
            list.append(22);
            expect(list.remove(22)).toBe(22);
        });
    });

    describe('removeAt()', () => {
        beforeEach(() => {
            list.append(22);
            list.append(33);
            list.append(44);
        });

        it('returns null when the index is invalid', () => {
            expect(list.removeAt(999)).toBe(null);
        });

        it('decrements the length', () => {
            list.removeAt(0);
            expect(list.length).toBe(2);
        });

        it('returns the removed item', () => {
            expect(list.removeAt(2)).toBe(44);
        });
    });

    describe('size()', () => {
        it('returns the length of the list', () => {
            const count = Math.floor(Math.random() * 100);

            for (let i = 0; i < count; i++) {
                list.append(Math.random());
            }

            expect(list.length).toBe(count);
            expect(list.size()).toBe(count);
        });
    });

    describe('toString()', () => {
        it('returns a string representation of the list', () => {
            list.append(22);
            list.append(33);
            list.append(44);

            expect(list.toString()).toBe('22 n 33 n 44');
        });
    });
});
