import {Item} from "./Item/Item";

export class GildedRose {
  items: any[]

  constructor(items: any[]) {
    this.items = items
  }

  updateQuality() {
    this.items.forEach(item => item.update())
  }
}
