export default class Dollar {

  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Dollar): boolean {
    return dollar.amount == this.amount;
  }
}