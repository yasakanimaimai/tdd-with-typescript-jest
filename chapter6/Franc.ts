import { Money } from "./Money";

export default class Franc extends Money {

  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}