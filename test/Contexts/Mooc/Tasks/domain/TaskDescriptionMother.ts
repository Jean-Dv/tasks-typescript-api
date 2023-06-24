import { TaskDescription } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskDescription'
import { WordMother } from '../../../Shared/domain/WordMother'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TaskDescriptionMother {
  static create(value: string): TaskDescription {
    return new TaskDescription(value)
  }

  static random(): TaskDescription {
    return this.create(WordMother.random({ maxLength: 30 }))
  }
}
