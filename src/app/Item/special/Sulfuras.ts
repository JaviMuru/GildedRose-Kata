import { Item } from "../Item"

export class Sulfuras extends Item {
  static NAME = "Sulfuras, Hand of Ragnaros"

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  update() {}
}
