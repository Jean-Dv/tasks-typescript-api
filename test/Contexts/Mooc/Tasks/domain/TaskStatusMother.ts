import { TaskState } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskState'
import { TaskStatus } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskStatus'
import { ArrayMother } from '../../../Shared/domain/ArrayMother'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TaskStatusMother {
  private static readonly statuses: string[] = [
    'PENDING',
    'BACKLOG',
    'TODO',
    'IN_PROGRESS',
    'BLOCKED',
    'CODE_REVIEW',
    'DONE'
  ]

  static create(value: string): TaskState {
    return new TaskState(value)
  }

  static random(): TaskState {
    return this.create(
      TaskStatus.STATES.getValue(ArrayMother.random(this.statuses)).value
    )
  }
}
