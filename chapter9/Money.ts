export abstract class Money {
  
  protected amount: number;
  protected currencyName: string;

  abstract times(multiplier: number): Money;

  constructor(amount: number, currencyName: string) {
    this.amount = amount;
    this.currencyName = currencyName;
  }

  equals(money: Money): boolean {
    const myClassName = this.constructor.name;
    const argClassName = money.constructor.name;
    return (
      this.amount == money.amount
      && myClassName === argClassName
    );
  }

  currency(): string {
    return this.currencyName;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }
}



export class Dollar extends Money {

  constructor(amount: number, currencyName: string) {
    super(amount, currencyName);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}



export class Franc extends Money {

  constructor(amount: number, currencyName: string) {
    super(amount, currencyName);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}