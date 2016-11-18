import ValuePair from 'ValuePair';

describe('ValuePair', () => {
    const key = Math.random();
    const value = Math.random();
    let sut;

    beforeEach(() => {
        sut = new ValuePair(key, value);
    });

    it('sets the key', () => {
        expect(sut.key).toBe(key);
    });

    it('sets the value', () => {
        expect(sut.value).toBe(value);
    });

    describe('toString', () => {
        it('returns a string representation', () => {
            expect(sut.toString()).toBe(`[${key} - ${value}]`);
        });
    });
});
