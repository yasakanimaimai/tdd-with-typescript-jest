import { Expression } from './Expression';

export class Money implements Expression {
  
  protected amount: number;
  protected currencyName: string;

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currencyName);
  };

  constructor(amount: number, currencyName: string) {
    this.amount = amount;
    this.currencyName = currencyName;
  }

  equals(money: Money): boolean {
    return (
      this.amount == money.amount
      && this.currency() === money.currency()
    );
  }

  currency(): string {
    return this.currencyName;
  }

  plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, addend.currencyName);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
