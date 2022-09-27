import Dollar from './Dollar';

describe('', () => {

  it('Multiplication', () => {
    const fiveDollar = new Dollar(5);
    expect(new Dollar(10)).toStrictEqual(fiveDollar.times(2));
    expect(new Dollar(15)).toStrictEqual(fiveDollar.times(3));
  });

  it('Equality', () => {
    const fiveDollar = new Dollar(5);
    expect(fiveDollar.equals(new Dollar(5))).toBeTruthy;
    expect(fiveDollar.equals(new Dollar(6))).toBeFalsy;
  })

});