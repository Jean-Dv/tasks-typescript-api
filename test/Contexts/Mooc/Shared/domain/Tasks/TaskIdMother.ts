import { TaskId } from '../../../../../../src/Contexts/Mooc/Shared/domain/Tasks/TaskId'
import { UuidMother } from '../../../../Shared/domain/UuidMother'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TaskIdMother {
  static create(value: string): TaskId {
    return new TaskId(value)
  }

  static random(): TaskId {
    return this.create(UuidMother.random())
  }
}
