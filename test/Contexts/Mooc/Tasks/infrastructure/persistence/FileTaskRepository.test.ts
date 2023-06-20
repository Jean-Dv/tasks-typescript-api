import { Task } from '../../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { FileTaskRepository } from '../../../../../../src/Contexts/Mooc/Tasks/infrastructure/persistence/FileTaskRepository'

describe('FileTaskRepository', () => {
  it('should save a task', async () => {
    const repository = new FileTaskRepository()
    const expectedTask = new Task({
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: 'pending'
    })

    await repository.save(expectedTask)
    const task = await repository.search('1')
    expect(task).toEqual(expectedTask)
  })
})
