export class Money {
  
  protected amount: number;

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
}