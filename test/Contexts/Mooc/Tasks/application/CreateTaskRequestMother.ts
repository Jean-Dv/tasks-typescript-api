import { type TaskId } from '../../../../../src/Contexts/Mooc/Shared/domain/Tasks/TaskId'
import { type CreateTaskRequest } from '../../../../../src/Contexts/Mooc/Tasks/application/CreateTaskRequest'
import { type TaskDescription } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskDescription'
import { type TaskState } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskState'
import { type TaskTitle } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskTitle'
import { TaskIdMother } from '../../Shared/domain/Tasks/TaskIdMother'
import { TaskDescriptionMother } from '../domain/TaskDescriptionMother'
import { TaskStatusMother } from '../domain/TaskStatusMother'
import { TaskTitleMother } from '../domain/TaskTitleMother'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CreateTaskRequestMother {
  static create(
    id: TaskId,
    title: TaskTitle,
    description: TaskDescription,
    status: TaskState
  ): CreateTaskRequest {
    return {
      id: id.value,
      title: title.value,
      description: description.value,
      status: status.value
    }
  }

  static random(): CreateTaskRequest {
    return this.create(
      TaskIdMother.random(),
      TaskTitleMother.random(),
      TaskDescriptionMother.random(),
      TaskStatusMother.random()
    )
  }

  static invalidRequest(): CreateTaskRequest {
    return {
      id: TaskIdMother.random().value,
      title: TaskTitleMother.invalid(),
      description: TaskDescriptionMother.random().value,
      status: TaskStatusMother.random().value
    }
  }
}
