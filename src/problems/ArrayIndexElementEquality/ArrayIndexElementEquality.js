const search = (arr, start, end) => {
    var index = start + Math.floor(((end - start) / 2));

    if (start === end && arr[start] !== start) {
        return -1;
    }

    if (arr[index] === index) {
        return index;
    } else if (arr[index] < index) {
        return search(arr, index + 1, end);
    }

    return search(arr, start, index - 1);
};

class ArrayIndexElementEquality {
    static run = (arr) => {
        if (!Array.isArray(arr)) {
            return -1;
        }

        return search(arr, 0, arr.length);
    }
}

export default ArrayIndexElementEquality;
