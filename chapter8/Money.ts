export abstract class Money {
  
  protected amount: number;

  abstract times(multiplier: number): Money;

  constructor(amount: number) {
    this.amount = amount;
  }

  equals(money: Money): boolean {
    const myClassName = this.constructor.name;
    const argClassName = money.constructor.name;
    return (
      this.amount == money.amount
      && myClassName === argClassName
    );
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}



export class Dollar extends Money {

  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}



export class Franc extends Money {

  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}