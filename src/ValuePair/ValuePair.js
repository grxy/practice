class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString = () => `[${this.key} - ${this.value}]`
}

export default ValuePair;
