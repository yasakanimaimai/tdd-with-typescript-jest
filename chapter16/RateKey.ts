export class RateKey {
  
  constructor(private from: string, private to: string) {}

  value(): string {
    return `${this.from}:${this.to}`;
  }

  equals(key: RateKey): boolean {
    return this.from === key.from && this.to === key.to;
  }
}