import Dollar from './Dollar';

describe('', () => {

  it('miltiplication', () => {
    const fiveDollar = new Dollar(5);
    const tenDollar = fiveDollar.times(2);
    expect(tenDollar.amount).toBe(10);
    const fifteen_dolar = fiveDollar.times(3);
    expect(fifteen_dolar.amount).toBe(15);
  });

});