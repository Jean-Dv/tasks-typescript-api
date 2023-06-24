import { MotherCreator } from './MotherCreator'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ArrayMother {
  public static random(arrayOfItems: string[]): string {
    const randomIndex = MotherCreator.random().datatype.number({
      min: 0,
      max: arrayOfItems.length - 1
    })
    return arrayOfItems[randomIndex]
  }
}
