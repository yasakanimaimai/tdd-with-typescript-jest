import { Bank } from './Bank';
import { Expression } from './Expression';
import { Sum } from './Sum';

export class Money implements Expression {
  
  public amount: number;
  public currencyName: string;

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
    return new Sum(this, addend);
  }

  reduce(bank: Bank ,to: string): Money {
    const rate: number = bank.rate(this.currencyName, to);
    return new Money(this.amount / rate, to);
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
