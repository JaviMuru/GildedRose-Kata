export class GildedRose {
  updateQuality(items: any[]): void {
    items.forEach(item => {
      item.update()
    });
  }
}
