import SUT from './StringCompressionRepeatedCharacters';

describe('StringCompressionRepeatedCharacters', () => {
    it('works with the empty string', () => {
        expect(SUT.run('')).toBe('');
    });

    it('works with a short string', () => {
        expect(SUT.run('a')).toBe('a');
    });

    it('returns the original string if it is shorter', () => {
        expect(SUT.run('abc')).toBe('abc');
    });

    it('returns the original string if it is the same size', () => {
        expect(SUT.run('aabbcc')).toBe('aabbcc');
    });

    it('returns the compressed string if it is shorter', () => {
        expect(SUT.run('aaabbbccc')).toBe('a3b3c3');
    });

    it('works with a long string', () => {
        expect(SUT.run('aaaaaaaaaaaaaaaaaaaa')).toBe('a20');
    });

    const otherCases = [123, null, undefined, {}, [1, 2, 3]];

    for (let i = 0; i < otherCases.length; i++) {
        let input = otherCases[i];
        let strInput = JSON.stringify(input);

        it(`returns ${strInput} for input ${strInput} (${typeof input})`, () => {
            expect(SUT.run(input)).toEqual(input);
        });
    }
});
