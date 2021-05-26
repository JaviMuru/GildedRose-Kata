import {ItemQualityOutOfRangeException} from "./Error"

const MAX_VALUE = 50
const MIN_VALUE = 0

export class ItemQuality {
  private readonly value: number

  constructor(value: number) {
    if (value < MIN_VALUE || value > MAX_VALUE) {
      throw new ItemQualityOutOfRangeException(value)
    }

    this.value = value
  }

  increase() {
    if (this.value === MAX_VALUE) {
      return this
    }

    return new ItemQuality(this.value + 1)
  }

  decrease() {
    if (this.value == MIN_VALUE) {
      return this
    }

    return new ItemQuality(this.value - 1)
  }

  reset() {
    return new ItemQuality(MIN_VALUE)
  }
}
