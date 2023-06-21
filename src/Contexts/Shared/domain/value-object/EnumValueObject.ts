export type EnumValue<T> = Record<string, T>

export abstract class EnumValueObject<T> {
  readonly values: EnumValue<T>

  constructor(values: EnumValue<T>) {
    this.values = values
  }

  public getValue(key: string): T {
    return this.values[key]
  }
}
