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
