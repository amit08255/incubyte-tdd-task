// eslint-disable-next-line @typescript-eslint/no-var-requires
const add = require('../index');

describe('add should work correctly', () => {
    test('should return 0 when blank string provided', () => {
        expect(add('')).toBe(0);
    });

    test('should add numbers from string correctly', () => {
        expect(add('1')).toBe(1);
        expect(add('1,4')).toBe(5);
        expect(add('1,2,3')).toBe(6);
        expect(add('1,2,3,4')).toBe(10);
    });
});
