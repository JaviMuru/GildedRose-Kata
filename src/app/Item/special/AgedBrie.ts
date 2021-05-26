import { Item } from "./Item"
import { ItemName } from "./ItemName"
import { ItemSellIn } from "./ItemSellIn"
import { ItemQuality } from "./ItemQuality"

export class AgedBrie extends Item {
  private static DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality)
  }

  update() {
    this.decreaseSellIn()

    this.increaseQuality()

    if (this.hasToBeSoldInLessThan(AgedBrie.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }
  }
}
