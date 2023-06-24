import * as faker from 'faker'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MotherCreator {
  static random(): Faker.FakerStatic {
    return faker
  }
}
