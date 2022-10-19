import { Bank } from "./Bank";
import { Expression } from "./Expression";
import { Money } from "./Money";

export class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public plus(addend: Expression): Expression {
    return Money.dollar(0);
  }

  reduce(bank: Bank, to: string): Money {
    const augendAmount = this.augend.reduce(bank, to).amount;
    const addendAmount = this.addend.reduce(bank, to).amount;
    return new Money(augendAmount + addendAmount, to);
  }
}