import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 20, b: 5, action: Action.Divide, expected: 4 },
  { a: 6, b: 2, action: Action.Multiply, expected: 12 },
  { a: 7, b: 2, action: Action.Subtract, expected: 5 },
  { a: 8, b: 2, action: Action.Subtract, expected: 6 },
  { a: 9, b: 2, action: Action.Exponentiate, expected: 81 },
  { a: 10, b: 2, action: 'InvalidAction', expected: null },
  { a: '10', b: 2, action: Action.Divide, expected: null },
];

describe('simpleCalculator', () => {
  testCases.forEach(({ a, b, action, expected }) => {
    test(`${a} ${action} ${b} expects ${expected}`, () => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    });
  });
});
