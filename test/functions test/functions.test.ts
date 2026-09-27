import{Multiply, isEven, compareStrings, calculatePercentage, isPositive} from "../../src/functions/calculator_2";

describe('Test of calculator_2', (): void => {

    test('to multiply two numbers', () => {
    const result1 = Multiply(2, 3);
    const result2 = Multiply(3, 4);
    expect(result1).toBe(6);
    expect(result2).toBe(12);
    })

    test('to find percentage from number', () => {
        expect(calculatePercentage(1,2)).toBe(50);
        expect(calculatePercentage(0.3,4.5)).toBeCloseTo(6.6,0);
    })

    test('to check if number is even',(): void => {
        expect(isEven(2)).toBeTruthy();
        expect(isEven(3)).toBeFalsy();
    })

    test('are strings the same', () => {
        expect(compareStrings('test','test')).toBeTruthy();
        expect(compareStrings('test3','test4')).toBeFalsy();
    })

    test('is number positive', () => {
        expect(isPositive(2)).toBeTruthy();
        expect(isPositive(-3)).toBeFalsy();
    })
})