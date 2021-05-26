export class ItemSellIn {
  private readonly value: number

  constructor(value: number) {
    this.value = value
  }

  decrease() {
    return new ItemSellIn(this.value - 1)
  }

  isLessThan(days: number) {
    return this.value < days
  }
}
