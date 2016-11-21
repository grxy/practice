class ReverseLinkedList {
    static run = (list) => {
        let next, prev = null;
        let current = list.getHead();

        if (current === null) {
            return list;
        }

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        list.head = prev;

        return list;
    }
}

export default ReverseLinkedList;
