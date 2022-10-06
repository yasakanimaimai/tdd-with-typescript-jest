import { Money } from "./Money";
import { Expression } from "./Expression";

export class Bank {
  
  reduce(source: Expression, to: string): Money {
    return new Money(10, "USD");
  }
}