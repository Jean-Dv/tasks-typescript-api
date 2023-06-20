import { type Task } from '../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { type TaskRepository } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskRepository'

export class TaskRepositoryMock implements TaskRepository {
  private readonly saveMock: jest.Mock

  constructor() {
    this.saveMock = jest.fn()
  }

  async save(task: Task): Promise<void> {
    this.saveMock(task)
  }

  assertSaveHaveBeenCalledWith(expected: Task): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected)
  }
}
