import { StandardItem } from "./Item/StandardItem"
import { AgedBrie } from "./AgedBrie"
import { BackstagePasses } from "./BackstagePasses"
import { Sulfuras } from "./Sulfuras"

export class ItemFactory {
  constructor(rawName: string, rawSellIn: number, rawQuality: number) {
    const Item = [AgedBrie, BackstagePasses, Sulfuras].find(Item => Item.NAME === rawName)

    return (Item !== undefined)
      ? new Item(rawName, rawSellIn, rawQuality)
      : new StandardItem(rawName, rawSellIn, rawQuality)
  }
}
