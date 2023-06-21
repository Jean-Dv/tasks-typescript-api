import { Task } from '../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { TaskCreator } from '../../../../../src/Contexts/Mooc/Tasks/application/TaskCreator'
import { TaskRepositoryMock } from '../__mocks__/TaskRepositoryMock'
import { TaskId } from '../../../../../src/Contexts/Mooc/Shared/domain/Tasks/TaskId'
import { TaskTitle } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskTitle'
import { TaskDescription } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskDescription'
import { TaskStatus } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskStatus'

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
    const status = 'IN_PROGRESS'
    const expectedTask = new Task({
      id: new TaskId(id),
      title: new TaskTitle(title),
      description: new TaskDescription(description),
      status: TaskStatus.STATES.getValue('IN_PROGRESS')
    })

    await creator.run({ id, title, description, status })
    repository.assertSaveHaveBeenCalledWith(expectedTask)
  })
})
