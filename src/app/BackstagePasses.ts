import { Item } from "./Item/Item"

const DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10
const TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5
const QUALITY_RESET_SELL_IN_THRESHOLD = 0

export class BackstagePasses extends Item {
  static NAME = "Backstage passes to a TAFKAL80ETC concert"

  constructor(name: string, sellIn: number, quality: number ) {
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
