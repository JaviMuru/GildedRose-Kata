import { Item } from "./Item";
import {ItemSellIn} from "./ItemSellIn";
import {ItemName} from "./ItemName";
import {ItemQuality} from "./ItemQuality";

export class StandardItem extends Item {
  private static DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD: number = 0;

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality);
}

  update = (): void => {
    this.decreaseSellIn();
    this.decreaseQuality();

    if (this.hasToBeSoldInLessThan(StandardItem.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD)) {
      this.decreaseQuality();
    }
  }
}
