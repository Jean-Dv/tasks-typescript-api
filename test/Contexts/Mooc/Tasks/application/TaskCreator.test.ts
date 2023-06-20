import { Task } from '../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { TaskCreator } from '../../../../../src/Contexts/Mooc/Tasks/application/TaskCreator'
import { TaskRepositoryMock } from '../__mocks__/TaskRepositoryMock'

describe('TaskCreator', () => {
  let repository: TaskRepositoryMock

  beforeEach(() => {
    repository = new TaskRepositoryMock()
  })

  it('should create a valid task', async () => {
    const creator = new TaskCreator(repository)
    const id = '1'
    const title = 'Task 1'
    const description = 'Description 1'
    const status = 'pending'
    const expectedTask = new Task({ id, title, description, status })

    await creator.run(id, title, description, status)
    repository.assertSaveHaveBeenCalledWith(expectedTask)
  })
})
