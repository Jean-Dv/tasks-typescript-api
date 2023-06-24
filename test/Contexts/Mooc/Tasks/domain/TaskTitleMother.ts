import { TaskTitle } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskTitle'
import { WordMother } from '../../../Shared/domain/WordMother'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TaskTitleMother {
  static create(value: string): TaskTitle {
    return new TaskTitle(value)
  }

  static random(): TaskTitle {
    return this.create(WordMother.random({ maxLength: 20 }))
  }

  static invalid(): string {
    return 'a'.repeat(51)
  }
}
