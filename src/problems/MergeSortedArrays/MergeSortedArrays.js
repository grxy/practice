// https://www.interviewcake.com/question/python/merge-sorted-arrays

class MergeSortedArrays {
    static run = (...inputs) => {
        let output = [];
        let count = 0;

        for (let i = 0; i < inputs.length; i++) {
            count += inputs[i].length;
        }

        while (count > 0) {
            let inputIndex = -1;
            let smallest;

            for (let i = 0; i < inputs.length; i++) {
                const input = inputs[i];

                if (input.length) {
                    const current = input[0];

                    if (smallest === undefined) {
                        smallest = current;
                        inputIndex = i;
                    } else {
                        if (current < smallest) {
                            smallest = current;
                            inputIndex = i;
                        }
                    }
                }
            }

            smallest = inputs[inputIndex].shift();
            output.push(smallest);

            count--;
        }

        return output;
    }
}

export default MergeSortedArrays;
