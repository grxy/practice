export const hasPalindromeOfLength = (input, pLen) => {
    if (typeof input !== 'string' || typeof pLen !== 'number') {
        return false;
    }

    let len = input.length;

    if (len < pLen || pLen === 0) {
        return false;
    }

    for (let i = 0; i <= len - pLen; i++) {
        let value = input.substring(i, i + pLen);

        if (isPalindrome(value)) {
            return true;
        }
    }

    return false;
};

export const hasWordThatIsPalindrome = (input) => {
    if (typeof input !== 'string') {
        return false;
    }

    let inputs = input.split(' ');

    for (let i = 0; i < inputs.length; i++) {
        if (isPalindrome(inputs[i])) {
            return true;
        }
    }

    return false;
};

export const isPalindrome = (input) => {
    if (typeof input !== 'string') {
        return false;
    }

    let len = input.length;

    if (len === 0) {
        return false;
    }

    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (input[i] !== input[len - i - 1]) {
            return false;
        }
    }

    return true;
};
