import { isPalindrome } from './palindrome';

describe('isPalindrome', () => {
    var tests = [
        ['racecar', true],
        ['poop', true],
        ['', true],
        ['fun', false],
        [null, false],
        [undefined, false],
        [NaN, false],
        [{}, false],
        [1234, false],
        [true, false]
    ];

    tests.forEach((test) => {
        let [input, output] = test;

        it(`should return ${output} when called with ${JSON.stringify(input)}`, () => {
            expect(isPalindrome(input)).toBe(output);
        });
    });
});
