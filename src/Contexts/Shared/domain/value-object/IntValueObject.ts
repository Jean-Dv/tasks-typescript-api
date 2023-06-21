export abstract class IntValueObject {
  readonly value: number

  constructor(value: number) {
    this.value = value
  }

  equalsTo(other: IntValueObject): boolean {
    return this.value === other.value
  }

  isBiggerThan(other: IntValueObject): boolean {
    return this.value > other.value
  }
}
