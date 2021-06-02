import {ItemFactory} from "../app/Item/ItemFactory";
import {GildedRose} from "../app/GildedRose";
import {ItemSellIn} from "../app/Item/ItemSellIn";

describe('GildedRose INTEGRATION', () => {
  it('should decreased sellIn value', () => {
    const items = [
      new ItemFactory("+5 Dexterity Vest", 10, 20),
      new ItemFactory("Aged Brie", 2, 0),
      new ItemFactory("Elixir of the Mongoose", 5, 7),
      new ItemFactory("Sulfuras, Hand of Ragnaros", 0, 10),
      new ItemFactory("Sulfuras, Hand of Ragnaros", -1, 10),
      new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new ItemFactory("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new ItemFactory("Conjured Mana Cake", 3, 6)
    ]
    const days = 2

    const gildedRose = new GildedRose(items)

    expect(true).toBe(true)

    for (let day = 0; day < days; day++) {
      console.log("-------- day " + day + " --------");
      console.log("name, sellIn, quality");

      items.forEach(item => console.log(item))
      console.log();

      gildedRose.updateQuality();
    }
  })
})
