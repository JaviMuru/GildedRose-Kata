import {ItemName} from "./ItemName";
import {ItemSellIn} from "./ItemSellIn";
import {ItemQuality} from "./ItemQuality";

export abstract class Item {
  name: ItemName
  sellIn: ItemSellIn
  quality: ItemQuality

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  decreaseSellIn() {
    this.sellIn = this.sellIn.decrease();
  }

  hasToBeSoldInLessThan = (days: number): boolean => {
    return this.sellIn.isLessThan(days);
  }

  increaseQuality = ():void => {
    this.quality = this.quality.increase();
  }

  decreaseQuality() {
    this.quality = this.quality.decrease();
  }

  resetQuality() {
    this.quality = this.quality.reset();
  }

  toString() {
    return this.name + ", " + this.sellIn + ", " + this.quality;
  }

  update = () => {}
}
