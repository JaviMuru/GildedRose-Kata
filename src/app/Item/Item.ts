import { ItemName } from "./ItemName"
import { ItemSellIn } from "./ItemSellIn"
import { ItemQuality } from "./ItemQuality"

export abstract class Item {
  name: ItemName
  sellIn: ItemSellIn
  quality: ItemQuality
  static NAME: string

  constructor(rawName: string, rawSellIn: number, rawQuality: number) {
    this.name = new ItemName(rawName)
    this.sellIn = new ItemSellIn(rawSellIn)
    this.quality = new ItemQuality(rawQuality)
  }

  decreaseSellIn() {
    this.sellIn = this.sellIn.decrease();
  }

  hasToBeSoldInLessThan = (days: number): boolean => {
    return this.sellIn.isLessThan(days);
  }

  increaseQuality() {
    this.quality = this.quality.increase()
  }

  decreaseQuality() {
    this.quality = this.quality.decrease()
  }

  resetQuality() {
    this.quality = this.quality.reset()
  }

  toString() {
    return this.name + ", " + this.sellIn + ", " + this.quality
  }

  abstract update()
}
