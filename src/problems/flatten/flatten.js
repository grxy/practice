const flatten = (input) => {
    if (!Array.isArray(input)) {
        return;
    }

    const stack = [...input];
    const output = [];

    while (stack.length) {
        const current = stack.pop();

        if (Array.isArray(current)) {
            stack.push(...current);
        } else {
            output.unshift(current);
        }
    }

    return output;
};

export default flatten;
