import { ItemFactory } from "../app/Item/ItemFactory"
import { GildedRose } from "../app/GildedRose"
import { ItemSellIn } from "../app/Item/ItemSellIn"
import { itemsFixture } from './fixtures/itemsFixture'
import {ItemQuality} from "../app/Item/ItemQuality";


describe('GildedRose INTEGRATION', () => {
  it('“Aged Brie” items should increase quaility during the pass of the days', () => {
    const items = [
      new ItemFactory("Aged Brie", 2,  0),
      new ItemFactory("+5 Dexterity Vest", 10,  20)
    ]

    const gildedRose = new GildedRose(items)
    gildedRose.updateQuality()

    // @ts-ignore
    expect(items[0].quality).toEqual(new ItemQuality(1))
    // @ts-ignore
    expect(items[1].quality).toEqual(new ItemQuality(19))
    gildedRose.updateQuality()
    // @ts-ignore
    expect(items[0].quality).toEqual(new ItemQuality(2))
    // @ts-ignore
    expect(items[1].quality).toEqual(new ItemQuality(18))
  })
})
