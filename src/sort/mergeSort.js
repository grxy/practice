const mergeArrays = (arr, startLeft, stopLeft, startRight, stopRight) => {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);

    let k = startRight;

    for (let i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }

    k = startLeft;

    for (let i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length - 1] = Infinity;
    leftArr[leftArr.length - 1] = Infinity;

    let m = 0;
    let n = 0;

    for (k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        } else {
            arr[k] = rightArr[n];
            n++;
        }
    }
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return;
    }

    let step = 1;
    let left, right;

    while (step < arr.length) {
        left = 0;
        right = step;

        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }

        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }

        step *= 2;
    }
};

export default mergeSort;
