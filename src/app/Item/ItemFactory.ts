import { StandardItem } from "./StandardItem"
import { AgedBrie } from "./special/AgedBrie"
import { BackstagePasses } from "./special/BackstagePasses"
import { Sulfuras } from "./special/Sulfuras"

export class ItemFactory {
  constructor(rawName: string, rawSellIn: number, rawQuality: number) {
    const Item = [AgedBrie, BackstagePasses, Sulfuras].find(Item => Item.NAME === rawName)

    return (Item !== undefined )
      ? new Item(rawName, rawSellIn, rawQuality)
      : new StandardItem(rawName, rawSellIn, rawQuality)
  }
}
