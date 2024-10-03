import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    expect(
      axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
      }),
    ).toBeDefined();
  });

  test('should perform request to correct provided url', async () => {
    const response = await throttledGetDataFromApi('users');
    expect(response).toBeDefined();
  });

  test('should return response data', async () => {
    const response = await throttledGetDataFromApi('users');
    expect(response).toBeDefined();
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
    expect(response[0]).toMatchObject({});
  });
});
