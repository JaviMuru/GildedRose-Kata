import { ItemName } from "./ItemName"
import { ItemQuality } from "./ItemQuality"
import { ItemSellIn } from "./ItemSellIn"
import { StandardItem } from "./StandardItem"
import { AgedBrie } from "./special/AgedBrie"
import { BackstagePasses } from "./special/BackstagePasses"
import { Sulfuras } from "./special/Sulfuras"

export class ItemFactory {
  name: ItemName
  sellIn: ItemSellIn
  quality: ItemQuality

  constructor(rawName: string, rawSellIn: number, rawQuality: number) {
    this.name = new ItemName(rawName)
    this.sellIn = new ItemSellIn(rawSellIn)
    this.quality = new ItemQuality(rawQuality)

    const Item = [AgedBrie, BackstagePasses, Sulfuras].find(Item => Item.NAME === rawName)

    return (Item !== undefined )
      ? new Item(this.name, this.sellIn, this.quality)
      : new StandardItem(this.name, this.sellIn, this.quality)
  }
}
