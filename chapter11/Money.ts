export class Money {
  
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

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
