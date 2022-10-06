import { Money , Dollar, Franc } from './Money';

describe('', () => {

  it('Dollar Multiplication', () => {
    const fiveDollar: Money = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(fiveDollar.times(2));
    expect(Money.dollar(15)).toStrictEqual(fiveDollar.times(3));
  });

  it('Equality', () => {
    const fiveDollar = Money.dollar(5);
    expect(fiveDollar.equals(Money.dollar(5))).toBe(true);
    expect(fiveDollar.equals(Money.dollar(6))).toBe(false);
    const fiveFranc = Money.franc(5);
    expect(fiveFranc.equals(Money.franc(5))).toBe(true);
    expect(fiveFranc.equals(Money.franc(6))).toBe(false);
  })

  it('Franc Multiplication', () => {
    const fiveFranc: Money = Money.franc(5);
    expect(Money.franc(10)).toStrictEqual(fiveFranc.times(2));
    expect(Money.franc(15)).toStrictEqual(fiveFranc.times(3));
  });

  it('Currency check', () => {
    expect(Money.dollar(5).currency()).toBe('USD');
    expect(Money.franc(5).currency()).toBe('CHF');
  })

  it('DifferentClassEquality', () => {
    expect(new Money(10, "CHF").equals(new Franc(10, "CHF")));
  })
});