import Dollar from './Dollar';

describe('', () => {

  it('Multiplication', () => {
    const fiveDollar = new Dollar(5);
    const tenDollar = fiveDollar.times(2);
    expect(tenDollar.amount).toBe(10);
    const fifteen_dolar = fiveDollar.times(3);
    expect(fifteen_dolar.amount).toBe(15);
  });

  it('Equality', () => {
    const fiveDollar = new Dollar(5);
    expect(fiveDollar.equals(new Dollar(5))).toBeTruthy;
    expect(fiveDollar.equals(new Dollar(6))).toBeFalsy;
  })

});