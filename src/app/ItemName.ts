export class ItemName {
  private static AGED_BRIE: string = "Aged Brie"
  private static BACKSTAGE_PASSES: string = "Backstage passes to a TAFKAL80ETC concert"
  private static SULFURAS: string = "Sulfuras, Hand of Ragnaros"

  private readonly value: string

  constructor(value: string) {
    this.value = value
  }

  isAgedBrie() {
    return ItemName.AGED_BRIE === this.value
  }

  isBackstagePasses() {
    return ItemName.BACKSTAGE_PASSES === this.value
  }

  isSulfuras() {
    return ItemName.SULFURAS === this.value
  }
}
