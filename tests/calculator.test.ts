import { add } from '../src/calculator';

describe('String Calculator - Multiple Numbers ', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself when only one number is provided', () => {
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two numbers', () => {
        expect(add("2,3")).toBe(5);
    });

    test('should return the number itself when only number is provided', () => {
        expect(add("5,20,9,3,4,5")).toBe(46);
    });

    test('should return the sum of all numbers', () => {
        expect(add("2,3,7,1")).toBe(13);
    });

    test('should return the sum when one number  if alphabets comes it treat as 0', () => {
        expect(add("4,a,9,5,m,0")).toBe(18);
    });

    test('should return 0 for non-numeric inputs this may also contains special character', () => {
        expect(add("a,b,*,&,#")).toBe(0);
    });
    test('should correctly sum numbers even with extra commas', () => {
        expect(add("1,2,,3")).toBe(6); // Empty values treated as 0
    });
    test('should handle negative numbers correctly', () => {
        expect(add("1,-2,3,-4")).toBe(-2);
    });
    test('should handle numbers with spaces and ignore spaces', () => {
        expect(add("1, 2, 3, 4")).toBe(10);
    });
    test('should handle multiple new lines and commas', () => {
        expect(add("1\n2\n3,4")).toBe(10);
    });

    test('should handle numbers separated only by new lines', () => {
        expect(add("1\n2\n3")).toBe(6);
    });

    test('should ignore invalid characters and treat them as 0', () => {
        expect(add("1,\n,2,3")).toBe(6); // Ignoring invalid separators
    });

    test('should return 0 if all inputs are invalid', () => {
        expect(add("a\nb,c")).toBe(0);
    });

    test('should handle numbers mixed with empty values correctly', () => {
        expect(add("2,,\n3\n")).toBe(5); // Empty values treated as 0
    });

    test('should handle numbers with trailing delimiters', () => {
        expect(add("1,2,3\n")).toBe(6); // Trailing newline
    });

    test('should handle numbers with leading delimiters', () => {
        expect(add("\n1,2,3")).toBe(6); // Leading newline
    });

});
