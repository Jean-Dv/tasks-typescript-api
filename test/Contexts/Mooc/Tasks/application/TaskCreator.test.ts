import { Task } from '../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { type TaskRepository } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskRepository'
import { TaskCreator } from '../../../../../src/Contexts/Mooc/Tasks/application/TaskCreator'

describe('TaskCreator', () => {
  it('should create a valid task', async () => {
    const repository: TaskRepository = {
      save: jest.fn()
    }
    const creator = new TaskCreator(repository)
    const id = '1'
    const title = 'Task 1'
    const description = 'Description 1'
    const status = 'pending'
    const expectedTask = new Task({ id, title, description, status })

    await creator.run(id, title, description, status)
    expect(repository.save).toHaveBeenCalledWith(expectedTask)
  })
})
