import StackSet from './StackSet';

let stack;

describe('StackSet', () => {
    describe('with stackSize === 1', () => {
        beforeEach(() => {
            stack = new StackSet(1);
            stack.push(1);
            stack.push(2);
            stack.push(3);
        });

        it('has the correct number of items', () => {
            expect(stack.size()).toBe(3);
        });

        it('has the correct stack count', () => {
            expect(stack.stacks.length).toBe(3);
        });

        describe('pop()', () => {
            it('returns the correct item', () => {
                expect(stack.pop()).toBe(3);
                expect(stack.pop()).toBe(2);
                expect(stack.pop()).toBe(1);
            });

            it('decreases the stack size', () => {
                stack.pop();
                expect(stack.size()).toBe(2);
            });

            it('descreases the stack count', () => {
                stack.pop();
                expect(stack.stacks.length).toBe(2);
            });
        });
    });

    describe('isEmpty()', () => {
        it('returns true bu default', () => {
            stack = new StackSet(5);
            expect(stack.isEmpty()).toBe(true);
        });

        it('returns false when there are items', () => {
            stack.push(4);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    const throwCases = [0, -999, '', {}, [], undefined, null];

    for (let i = 0; i < throwCases.length; i++) {
        const input = throwCases[i];

        it(`throws when initialized with ${JSON.stringify(input)}`, () => {
            const throws = () => {
                new StackSet(input);
            };

            expect(throws).toThrow();
        });
    }

});
