import Dollar from './Dollar';

describe('', () => {

  it('5ドル * 2 = 10ドル', () => {
    const fiveDollar = new Dollar(5);
    fiveDollar.times(2);
    expect(fiveDollar.amount).toBe(10);
  });

});