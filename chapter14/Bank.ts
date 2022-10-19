import { Money } from "./Money";
import { Expression } from "./Expression";
import { RateKey } from "./RateKey";

export class Bank {

  private rates = new Map<string, number>();
  
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    this.rates.set(new RateKey(from, to).value(), rate);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    // ここキャストしない方法はあるのか？
    const rate = this.rates.get(new RateKey(from, to).value()) as number;
    return rate;
  }
}