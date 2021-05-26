import { ItemName } from "./ItemName"
import { ItemQuality } from "./ItemQuality"
import { ItemSellIn } from "./ItemSellIn"
import { StandardItem } from "./StandardItem"
import { AgedBrie } from "./AgedBrie"
import { BackstagePasses } from "./BackstagePasses"
import { Sulfuras } from "./Sulfuras"

export class ItemFactory {
  name: ItemName
  sellIn: ItemSellIn
  quality: ItemQuality

  constructor(rawName: string, rawSellIn: number, rawQuality: number) {
    this.name = new ItemName(rawName)
    this.sellIn = new ItemSellIn(rawSellIn)
    this.quality = new ItemQuality(rawQuality)

    if (this.name.isAgedBrie()) {
      return new AgedBrie(this.name, this.sellIn, this.quality)
    }

    if (this.name.isBackstagePasses()) {
      return new BackstagePasses(this.name, this.sellIn, this.quality)
    }

    if (this.name.isSulfuras()) {
      return new Sulfuras(this.name, this.sellIn, this.quality)
    }

    return new StandardItem(this.name, this.sellIn, this.quality)
  }
}
