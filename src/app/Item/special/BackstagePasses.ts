import { Item } from "../Item"
import { ItemName } from "../ItemName"
import { ItemSellIn } from "../ItemSellIn"
import { ItemQuality } from "../ItemQuality"

const DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10
const TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5
const QUALITY_RESET_SELL_IN_THRESHOLD = 0

export class BackstagePasses extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality ) {
    super(name, sellIn, quality)
}

   update() {
    this.decreaseSellIn()
    this.increaseQuality()

    if (this.hasToBeSoldInLessThan(DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }

    if (this.hasToBeSoldInLessThan(TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }

    if (this.hasToBeSoldInLessThan(QUALITY_RESET_SELL_IN_THRESHOLD)) {
      this.resetQuality()
    }
  }
}
