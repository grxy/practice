import Fibonacci from './Fibonacci';

describe('Fibonacci', () => {
    it('returns -1 for an invalid input', () => {
        expect(Fibonacci.get(-999)).toBe(-1);
    });

    it('returns the correct 1st fibonacci number', () => {
        expect(Fibonacci.get(1)).toBe(1);
    });

    it('returns the correct 2nd fibonacci number', () => {
        expect(Fibonacci.get(2)).toBe(1);
    });

    it('returns the correct 3rd fibonacci number', () => {
        expect(Fibonacci.get(3)).toBe(2);
    });

    it('returns the correct 4th fibonacci number', () => {
        expect(Fibonacci.get(4)).toBe(3);
    });

    it('returns the correct 5th fibonacci number', () => {
        expect(Fibonacci.get(5)).toBe(5);
    });

    it('returns the correct 50th fibonacci number', () => {
        expect(Fibonacci.get(50)).toBe(12586269025);
    });
});
