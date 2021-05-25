import {Item} from "./app/Item";
import {GildedRose} from "./app/GildedRose";
import {ItemFactory} from "./app/ItemFactory";

const main = () => {
  const item = new ItemFactory("whatever", 10, 0)

  const gildedRose = new GildedRose()
  // @ts-ignore
  gildedRose.updateQuality([item])

  console.log('gildedRose',gildedRose)
}

main()
