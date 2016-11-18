import { hasPalindromeOfLength, hasWordThatIsPalindrome, isPalindrome } from './palindrome';

describe('hasPalindromeOfLength', () => {
    var tests = [
        ['', 0, false],
        ['', 1, false],
        ['x', 1, true],
        ['xyx', 1, true],
        ['xyx', 4, false],
        ['racecar', 2, false],
        ['racecar', 6, false],
        ['racecar', 7, true],
        [null, 0, false],
        [undefined, 0, false],
        [NaN, 0, false],
        [{}, 0, false],
        [1234, 0, false],
        [true, 0, false]
    ];

    tests.forEach((test) => {
        let [input, pLen, output] = test;

        it(`returns ${output} when called with ${JSON.stringify(input)}, ${pLen}`, () => {
            expect(hasPalindromeOfLength(input, pLen)).toBe(output);
        });
    });
});

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

        it(`returns ${output} when called with ${JSON.stringify(input)}`, () => {
            expect(hasWordThatIsPalindrome(input)).toBe(output);
        });
    });
});

describe('isPalindrome', () => {
    var tests = [
        ['racecar', true],
        ['poop', true],
        ['', false],
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

        it(`returns ${output} when called with ${JSON.stringify(input)}`, () => {
            expect(isPalindrome(input)).toBe(output);
        });
    });
});
