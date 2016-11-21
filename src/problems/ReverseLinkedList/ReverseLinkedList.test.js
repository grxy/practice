import LinkedList from 'LinkedList';
import ReverseLinkedList from './ReverseLinkedList';

describe('ReverseLinkedList', () => {
    // input, output
    const cases = [
        [[], ''],
        [[2], '2'],
        [[1, 2, 3], '3 n 2 n 1'],
        [[3, 9, 1, 2], '2 n 1 n 9 n 3']
    ];

    for (let i = 0; i < cases.length; i++) {
        const [input, output] = cases[i];

        it(`returns ${JSON.stringify(output)} for input ${JSON.stringify(input)}`, () => {
            const list = new LinkedList();

            for (let j = 0; j < input.length; j++) {
                list.append(input[j]);
            }

            const rList = ReverseLinkedList.run(list);

            for (let j = 0; j < input.length; j++) {
                expect(rList.toString()).toEqual(output);
            }
        });
    }
});
