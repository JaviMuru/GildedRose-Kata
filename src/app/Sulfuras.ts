import { Item } from "./Item";
import { ItemSellIn } from "./ItemSellIn";
import { ItemQuality } from "./ItemQuality";
import { ItemName } from "./ItemName";

export class Sulfuras extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
  }

  update = (): void => {}
}
