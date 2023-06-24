import { type TaskId } from '../../../../../src/Contexts/Mooc/Shared/domain/Tasks/TaskId'
import { type CreateTaskRequest } from '../../../../../src/Contexts/Mooc/Tasks/application/CreateTaskRequest'
import { Task } from '../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { type TaskDescription } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskDescription'
import { type TaskState } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskState'
import { type TaskTitle } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskTitle'
import { TaskIdMother } from '../../Shared/domain/Tasks/TaskIdMother'
import { TaskDescriptionMother } from './TaskDescriptionMother'
import { TaskStatusMother } from './TaskStatusMother'
import { TaskTitleMother } from './TaskTitleMother'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TaskMother {
  static create(
    id: TaskId,
    title: TaskTitle,
    description: TaskDescription,
    status: TaskState
  ): Task {
    return new Task({ id, title, description, status })
  }

  static fromRequest(request: CreateTaskRequest): Task {
    return this.create(
      TaskIdMother.create(request.id),
      TaskTitleMother.create(request.title),
      TaskDescriptionMother.create(request.description),
      TaskStatusMother.create(request.status)
    )
  }

  static random(): Task {
    return this.create(
      TaskIdMother.random(),
      TaskTitleMother.random(),
      TaskDescriptionMother.random(),
      TaskStatusMother.random()
    )
  }
}
