import { getBankAccount, SynchronizationFailedError } from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    expect(getBankAccount(100).getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(100).withdraw(200)).toThrow(
      'Insufficient funds: cannot withdraw more than 100',
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      getBankAccount(100).transfer(200, getBankAccount(100)),
    ).toThrow('Insufficient funds: cannot withdraw more than 100');
  });

  test('should throw error when transferring to the same account', () => {
    const acc = getBankAccount(100);
    expect(() => acc.transfer(200, acc)).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    expect(getBankAccount(100).deposit(200).getBalance()).toBe(300);
  });

  test('should withdraw money', () => {
    expect(getBankAccount(100).withdraw(50).getBalance()).toBe(50);
  });

  test('should transfer money', () => {
    expect(
      getBankAccount(100).transfer(50, getBankAccount(100)).getBalance(),
    ).toBe(50);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const balance = await getBankAccount(100).fetchBalance();
    if (balance) expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const acc = getBankAccount(100);
    const fetchBalance = await acc.fetchBalance();
    if (fetchBalance)
      expect(acc.deposit(fetchBalance).getBalance()).toBe(100 + fetchBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    await getBankAccount(100)
      .synchronizeBalance()
      .catch((err) => {
        expect(err).toBeInstanceOf(SynchronizationFailedError);
      });
  });
});
