const permutations = (input) => {
    const isString = typeof input === 'string';

    if (isString) {
        if (input.length < 2) {
            return [input];
        }

        input = input.split('');
    } else if (!Array.isArray(input) || input.length < 2) {
        return [input];
    }

    const output = [];

    const perms = permutations(input.slice(1));
    const current = input[0];

    for (let i = 0; i < perms.length; i++) {
        const perm = perms[i];

        for (let position = 0; position < input.length; position++) {
            const add = [...perm.slice(0, position), current, ...perm.slice(position, perm.length)];

            output.push(add);
        }
    }

    if (isString) {
        for (let i = 0; i < output.length; i++) {
            output[i] = output[i].join('');
        }
    }

    return output;
};

export default permutations;
