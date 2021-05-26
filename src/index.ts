import { GildedRose } from "./app/GildedRose"
import { ItemFactory } from "./app/Item/ItemFactory"

const main = () => {
  const item = new ItemFactory("whatever", 10, 0)

  const gildedRose = new GildedRose()
  gildedRose.updateQuality([item])

  console.log('gildedRose',gildedRose)
}

main()
