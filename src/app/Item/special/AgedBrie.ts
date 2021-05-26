import { Item } from "../Item"
import { ItemName } from "../ItemName"
import { ItemSellIn } from "../ItemSellIn"
import { ItemQuality } from "../ItemQuality"

const DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0

export class AgedBrie extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
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
