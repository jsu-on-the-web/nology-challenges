
import { rectangleArea } from './shapes.js';

// Test 1: Sanity check; Did I set everything up correctly?
// test('Is Jest setup correctly?', () => {
//     expect(true).toBe(true);
// });

describe('rectangleArea tests', () => {
    test('The parameters are positive numbers, so the function works properly', () => {
        expect(rectangleArea(2, 3)).toBe(6);
    })
    test('Throws an error if the parameters are negative', () => {
        expect(() => {
            rectangleArea(-1, 2);
        }).toThrow();
    })

    test('The parameters are both of type number', () => {
        expect(rectangleArea(10, 12)).toBe(120);
    });
    test('Throws an error if one or more of the parameters are not numbers', () => {
        expect(() => {
            rectangleArea("test", 1);
        }).toThrow();

        expect(() => {
            rectangleArea(test, "1");
        }).toThrow();

        expect(() => {
            rectangleArea("test", "test");
        }).toThrow();
    });

    test('Throw an error if one or more arguments are not provided', () => {
        expect(() => {
            rectangleArea();
        }).toThrow();

        expect(() => {
            rectangleArea(1);
        }).toThrow();
    });
})