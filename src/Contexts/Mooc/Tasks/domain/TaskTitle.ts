import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { TaskTitleLengthExceeded } from './TaskTitleLengthExceeded'

export class TaskTitle extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureLengthIsLessThan50Characters(value)
  }

  private ensureLengthIsLessThan50Characters(value: string): void {
    if (value.length > 50) {
      throw new TaskTitleLengthExceeded(
        `The Course Name <${value} has more than 50 characters`
      )
    }
  }
}
