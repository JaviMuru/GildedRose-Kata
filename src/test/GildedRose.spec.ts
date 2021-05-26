import { GildedRose } from "../app/GildedRose"
import { ItemFactory } from "../app/Item/ItemFactory"
import { ItemSellIn } from "../app/Item/ItemSellIn"
import { ItemQuality } from "../app/Item/ItemQuality"

describe('GildedRose', () => {
  it('should decreased sellIn value', ()=> {
    const item = new ItemFactory("whatever", 10, 0)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.sellIn).toEqual(new ItemSellIn(9))
  })

  it('should decreased quality value', ()=> {
    const item = new ItemFactory("whatever", 1, 10)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(9))
  })

  it('should test quality decreases twice as much when sell by is passed', ()=> {
    const item = new ItemFactory("whatever", 0, 10)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(8))
  })

  it('should test quality is never negative', ()=> {
    const item = new ItemFactory("whatever", 0, 0)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(0))
  })


  it('should test AgedBrie increases quality with age', () => {
    const item = new ItemFactory("Aged Brie", 5, 1)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(2))
  })


  it('should test quality never increases past fifty', () => {
    const item = new ItemFactory("Aged Brie", 5, 50)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(50))
  })

  it('should test Sulfuras never changes', () => {
    const item = new ItemFactory("Sulfuras, Hand of Ragnaros", 0, 25)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(25))
    expect(item.sellIn).toEqual(new ItemSellIn(0))
  })


  it('should test BackstagePass increases quality by one if sell by greater than ten', () => {
    const item  = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 11, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(21))
  })


  it('should test BackstagePass increases quality by two if sell by smaller than ten', () => {
    const item = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 6, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(22))
  })


  it('should test BackstagePass increases quality by three if sell by smaller than five', () => {
    const item = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 5, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(23))
  })


  it('should test BackstagePass loses value after sell by passes', () => {
    const item = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 0, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(0))
  })
})
