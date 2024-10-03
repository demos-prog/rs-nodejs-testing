import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList([1, 1])).toStrictEqual({
      value: 1,
      next: {
        value: 1,
        next: {
          value: null,
          next: null,
        },
      },
    });
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList([2, 2])).toMatchSnapshot({
      value: 2,
      next: {
        value: 2,
        next: {
          value: null,
          next: null,
        },
      },
    });
  });
});
