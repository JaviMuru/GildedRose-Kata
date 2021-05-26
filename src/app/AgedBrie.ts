import { Item } from "./Item/Item"

const DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0

export class AgedBrie extends Item {
  static NAME = "Aged Brie"

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellIn()
    this.increaseQuality()

    if (this.hasToBeSoldInLessThan(DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }
  }
}
