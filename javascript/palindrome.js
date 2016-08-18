export const hasWordThatIsPalindrome = (input) => {
    if (typeof input !== 'string') {
        return false;
    }

    let inputs = input.split(' ');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].length > 0 && isPalindrome(inputs[i])) {
            return true;
        }
    }

    return false;
};

export const isPalindrome = (input) => {
    if (typeof input !== 'string') {
        return false;
    }

    var len = input.length;

    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (input[i] !== input[len - i - 1]) {
            return false;
        }
    }

    return true;
};
