import { GildedRose } from "../app/GildedRose";
import { ItemFactory } from "../app/ItemFactory";
import {ItemSellIn} from "../app/ItemSellIn";
import {ItemQuality} from "../app/ItemQuality";

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

  it('should testThatQualityDecreasesTwiceAsMuchWhenSellByIsPassed', ()=> {
    const item = new ItemFactory("whatever", 0, 10)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(8))
  })

  it('quality should never be negative', ()=> {
    const item = new ItemFactory("whatever", 0, 0)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(0))
  })


  it('testAgedBrieIncreasesQualityWithAge', () => {
    const item = new ItemFactory("Aged Brie", 5, 1)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(2))
  })


  it('testQualityNeverIncreasesPastFifty', () => {
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


  it('testBackstagePassIncreasesQualityByOneIfSellByGreaterThenTen', () => {
    const item  = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 11, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(21))
  })


  it('testBackstagePassIncreasesQualityByTwoIfSellBySmallerThanTen', () => {
    const item = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 6, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(22))
  })


  it('testBackstagePassIncreasesQualityByThreeIfSellBySmallerThanFive', () => {
    const item = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 5, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(23))
  })


  it('should testBackstagePassLosesValueAfterSellByPasses', () => {
    const item = new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 0, 20)

    const gildedRose = new GildedRose()
    gildedRose.updateQuality([item])

    expect(item.quality).toEqual(new ItemQuality(0))
  })
})
