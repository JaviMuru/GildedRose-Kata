export class ItemQualityOutOfRangeException extends Error {
  constructor(qualityCandidate: number) {
    super(`Tried to set an ItemQuality of ${qualityCandidate} which is outside the valid range`)
  }
}
