import { Money } from './Money';
import { Expression } from './Expression';
import { Bank } from './Bank';
import { Sum } from './Sum';


describe('', () => {

  it('Multiplication', () => {
    const fiveDollar: Money = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(fiveDollar.times(2));
    expect(Money.dollar(15)).toStrictEqual(fiveDollar.times(3));
  });

  it('Equality', () => {
    const fiveDollar = Money.dollar(5);
    expect(fiveDollar.equals(Money.dollar(5))).toBe(true);
    expect(fiveDollar.equals(Money.dollar(6))).toBe(false);
    expect(fiveDollar.equals(Money.franc(5))).toBe(false);
  })

  it('Currency check', () => {
    expect(Money.dollar(5).currency()).toBe('USD');
    expect(Money.franc(5).currency()).toBe('CHF');
  })

  it('Sum', () => {
    const fiveDollar = Money.dollar(5);
    const sum: Expression = fiveDollar.plus(fiveDollar);
    const bank = new Bank();
    const reduced: Money = bank.reduce(sum, "USD");
    expect(Money.dollar(10)).toStrictEqual(reduced);
  })

  it('PlusReturnsSum', () => {
    const fiveDollar = Money.dollar(5);
    const result: Expression = fiveDollar.plus(fiveDollar);
    const sum: Sum = result as Sum;
    expect(fiveDollar).toStrictEqual(sum.augend);
    expect(fiveDollar).toStrictEqual(sum.addend);
  })

  it('ReduceSum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const reduced = bank.reduce(sum, 'USD');
    expect(reduced).toStrictEqual(Money.dollar(7));
  })

  it('ReduceMoney', () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result).toStrictEqual(Money.dollar(1));
  })
});