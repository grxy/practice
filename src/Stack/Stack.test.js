import Stack from './stack';

let stack;

describe('Stack', () => {
    beforeEach(() => {
        stack = new Stack();
    });

    describe('clear()', () => {
        beforeEach(() => {
            stack.push(1);
            stack.push(7);
        });

        it('clears the stack', () => {
            stack.clear();
            expect(stack.size()).toBe(0);
        });

        it('creates a new items array', () => {
            const { items } = stack;
            stack.clear();
            expect(items).not.toBe(stack.items);
        });
    });

    describe('isEmpty()', () => {
        it('returns true when the stack is empty', () => {
            expect(stack.isEmpty()).toBe(true);
        });

        it('returns false when the stack has items', () => {
            stack.push(2);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe('peek()', () => {
        it('returns the top item in the stack', () => {
            stack.push(1);
            stack.push(72);

            expect(stack.peek()).toBe(72);
        });

        it('returns undefined when the stack is empty', () => {
            expect(stack.peek()).toBe(undefined);
        });
    });

    describe('pop()', () => {
        beforeEach(() => {
            stack.push(1);
            stack.push(2);
        });

        it('decreases the stack size', () => {
            expect(stack.size()).toBe(2);
            stack.pop();
            expect(stack.size()).toBe(1);
        });

        it('returns the popped item', () => {
            const item = stack.peek();
            expect(stack.pop()).toBe(item);
        });
    });

    describe('print()', () => {
        it('', () => {
            const count = Math.floor(Math.random() * 100);

            for (let i = 0; i < count; i++) {
                stack.push(0);
            }

            spyOn(console, 'log');
            stack.print();
            // eslint-disable-next-line no-console
            expect(console.log).toHaveBeenCalledWith(stack.toString());
        });
    });

    describe('push()', () => {
        it('adds the item to the stack', () => {
            stack.push(42);
            expect(stack.peek()).toBe(42);
        });

        it('increases the size of the stack', () => {
            stack.push(44);
            stack.push(23);
            expect(stack.size()).toBe(2);
            stack.push(22);
            expect(stack.size()).toBe(3);
        });
    });

    describe('size()', () => {
        it('returns when length is 0', () => {
            expect(stack.size()).toBe(0);
        });

        it('returns the correct value after items have been added', () => {
            const count = Math.floor(Math.random() * 100);

            for (let i = 0; i < count; i++) {
                stack.push(Math.random());
            }

            expect(stack.size()).toBe(count);
            expect(stack.size()).toBe(stack.items.length);
        });
    });

    describe('toString', () => {
        it('outputs the stack as a string', () => {
            const items = [22, 45, 19, 'test'];
            items.forEach((item) => {
                stack.push(item);
            });
            expect(stack.toString()).toEqual(items.join(','));
        });
    });
});
