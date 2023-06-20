import { Task } from '../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { TaskCreator } from '../../../../../src/Contexts/Mooc/Tasks/application/TaskCreator'
import { TaskRepositoryMock } from '../__mocks__/TaskRepositoryMock'
import { TaskId } from '../../../../../src/Contexts/Mooc/Shared/domain/Tasks/TaskId'

describe('TaskCreator', () => {
  let repository: TaskRepositoryMock

  beforeEach(() => {
    repository = new TaskRepositoryMock()
  })

  it('should create a valid task', async () => {
    const creator = new TaskCreator(repository)
    const id = 'fb966fc1-4b03-4e5e-ad92-efbb399a0f78'
    const title = 'Task 1'
    const description = 'Description 1'
    const status = 'pending'
    const expectedTask = new Task({
      id: new TaskId(id),
      title,
      description,
      status
    })

    await creator.run({ id, title, description, status })
    repository.assertSaveHaveBeenCalledWith(expectedTask)
  })
})
