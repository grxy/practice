class StringCompressionRepeatedCharacters {
    static run = (input) => {
        if (typeof input !== 'string') {
            return input;
        }

        let compressedString = '';
        let count = 1;

        for (let i = 1; i < input.length; i++) {
            const prev = input[i - 1];
            const cur = input[i];

            if (prev === cur) {
                count++;
            } else {
                compressedString += prev + count;
                count = 1;
            }
        }

        compressedString += input[input.length - 1] + count;

        return compressedString.length < input.length ? compressedString : input;
    }
}

export default StringCompressionRepeatedCharacters;
