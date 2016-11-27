import LinkedListInteger from './LinkedListInteger';

describe('LinkedListInteger', () => {
    let sut;

    beforeEach(() => {
        sut = new LinkedListInteger();
    });

    it('has a default value of 0', () => {
        expect(sut.value).toBe(0);
    });

    describe('add()', () => {
        it('returns the correct value', () => {
            const sut2 = new LinkedListInteger(4);
            expect(sut.add(sut2)).toBe(4);
        });
    });

    describe('divide()', () => {
        it('returns the correct value', () => {
            const sut2 = new LinkedListInteger(10);
            expect(sut.divide(sut2)).toBe(0);
        });
    });

    describe('multiply()', () => {
        it('returns the correct value', () => {
            sut.value = 12;
            const sut2 = new LinkedListInteger(10);
            expect(sut.multiply(sut2)).toBe(120);
        });
    });

    describe('subtract()', () => {
        it('returns the correct value', () => {
            const sut2 = new LinkedListInteger(409);
            expect(sut.subtract(sut2)).toBe(-409);
        });
    });

    describe('set value', () => {
        beforeEach(() => {
            sut.value = 123;
        });

        it('sets the value', () => {
            expect(sut.value).toBe(123);
        });

        it('adds items to the linked list', () => {
            expect(sut.list.indexOf(3)).toBe(0);
            expect(sut.list.indexOf(2)).toBe(1);
            expect(sut.list.indexOf(1)).toBe(2);
        });
    });
});
