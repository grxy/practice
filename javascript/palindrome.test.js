import { hasWordThatIsPalindrome, isPalindrome } from './palindrome';

describe('hasWordThatIsPalindrome', () => {
    var tests = [
        ['The racecar that explodes', true],
        ['poop', true],
        ['funny        guys', false],
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
            expect(hasWordThatIsPalindrome(input)).toBe(output);
        });
    });
});

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
