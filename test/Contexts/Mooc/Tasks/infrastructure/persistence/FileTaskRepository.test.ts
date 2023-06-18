import { Task } from '../../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { FileTaskRepository } from '../../../../../../src/Contexts/Mooc/Tasks/infrastructure/persistence/FileTaskRepository'

describe('Save Task', () => {
  it('should have a task', async () => {
    const repository = new FileTaskRepository()
    const task = new Task({
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: 'pending'
    })

    await repository.save(task)
  })
})
