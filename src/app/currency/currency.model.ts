export class CurrencyModel {
  name: string;
  value: number;
  count: number;
  subtotal: number;

  constructor(name: string, value: number, count?: number, subtotal?: number) {
    this.name = name;
    this.value = value;
    this.count = count;
    this.subtotal = subtotal;
  }
}
