const loseloseHashCode = (key) => {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }

    return hash % 37;
};

const noHash = () => 0;

export { loseloseHashCode, noHash };
