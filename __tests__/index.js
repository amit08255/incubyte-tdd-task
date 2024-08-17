// eslint-disable-next-line @typescript-eslint/no-var-requires
const add = require('../index');

describe('add should work correctly', () => {
    test('should return 0 when blank string provided', () => {
        expect(add('')).toBe(0);
    });

    test('should add numbers from string correctly', () => {
        expect(add('1')).toBe(1);
        expect(add('1,4')).toBe(5);
        expect(add('1,2,35')).toBe(38);
        expect(add('1,250,3,4')).toBe(258);
        expect(add('1,2\n3,4,5\n6')).toBe(21);
        expect(add('//;\n2;3;75;500')).toBe(580);
        expect(add('//;\n1;2;3;4\n5;6')).toBe(21);
    });

    test('Should throw error when custom delimiter string format is invalid', () => {
        expect(() => add('//;1;2;3;4;5;6')).toThrow();
    });
});
