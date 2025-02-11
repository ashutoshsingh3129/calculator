import { add } from '../src/calculator';

describe('String Calculator - Two Numbers Only', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself when only one number is provided', () => {
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two numbers', () => {
        expect(add("2,3")).toBe(5);
    });

    test('should return the sum when one number is missing (treated as 0)', () => {
        expect(add("4,")).toBe(4);
        expect(add(",4")).toBe(4);
    });

    test('should return 0 for non-numeric inputs', () => {
        expect(add("a,b")).toBe(0);
    });
});
