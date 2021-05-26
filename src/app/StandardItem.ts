import { Item } from "./Item"

const DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0

export class StandardItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellIn()
    this.decreaseQuality()

    if (this.hasToBeSoldInLessThan(DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD)) {
      this.decreaseQuality()
    }
  }
}
