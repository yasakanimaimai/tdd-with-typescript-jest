import { Money , Dollar, Franc } from './Money';

describe('', () => {

  it('Dollar Multiplication', () => {
    const fiveDollar: Money = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(fiveDollar.times(2));
    expect(Money.dollar(15)).toStrictEqual(fiveDollar.times(3));
  });

  it('Equality', () => {
    const fiveDollar = new Dollar(5);
    expect(fiveDollar.equals(Money.dollar(5))).toBe(true);
    expect(fiveDollar.equals(Money.dollar(6))).toBe(false);
    const fiveFranc = new Franc(5);
    expect(fiveFranc.equals(new Franc(5))).toBe(true);
    expect(fiveFranc.equals(new Franc(6))).toBe(false);
  })

  it('Franc Multiplication', () => {
    const fiveFranc: Money = Money.franc(5);
    expect(Money.franc(10)).toStrictEqual(fiveFranc.times(2));
    expect(Money.franc(15)).toStrictEqual(fiveFranc.times(3));
  });
});