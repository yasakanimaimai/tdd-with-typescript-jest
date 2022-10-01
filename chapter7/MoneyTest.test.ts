import Dollar from './Dollar';
import Franc from './Franc';

describe('', () => {

  it('Dollar Multiplication', () => {
    const fiveDollar = new Dollar(5);
    expect(new Dollar(10)).toStrictEqual(fiveDollar.times(2));
    expect(new Dollar(15)).toStrictEqual(fiveDollar.times(3));
  });

  it('Equality', () => {
    const fiveDollar = new Dollar(5);
    expect(fiveDollar.equals(new Dollar(5))).toBe(true);
    expect(fiveDollar.equals(new Dollar(6))).toBe(false);
    const fiveFranc = new Franc(5);
    expect(fiveFranc.equals(new Franc(5))).toBe(true);
    expect(fiveFranc.equals(new Franc(6))).toBe(false);
  })

  it('Franc Multiplication', () => {
    const fiveFranc = new Franc(5);
    expect(new Franc(10)).toStrictEqual(fiveFranc.times(2));
    expect(new Franc(15)).toStrictEqual(fiveFranc.times(3));
  });
});