import { MotherCreator } from './MotherCreator'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class WordMother {
  static random({
    minLength = 1,
    maxLength
  }: {
    minLength?: number
    maxLength: number
  }): string {
    return (
      MotherCreator.random().lorem.word(
        Math.floor(Math.random() * (maxLength - minLength)) + minLength
      ) ?? 'word'
    )
  }
}
