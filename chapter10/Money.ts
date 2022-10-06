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
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}



export class Dollar extends Money {

  constructor(amount: number, currencyName: string) {
    super(amount, currencyName);
  }
}



export class Franc extends Money {

  constructor(amount: number, currencyName: string) {
    super(amount, currencyName);
  }
}