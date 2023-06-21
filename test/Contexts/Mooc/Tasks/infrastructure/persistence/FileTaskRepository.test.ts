import { TaskId } from '../../../../../../src/Contexts/Mooc/Shared/domain/Tasks/TaskId'
import { Task } from '../../../../../../src/Contexts/Mooc/Tasks/domain/Task'
import { TaskDescription } from '../../../../../../src/Contexts/Mooc/Tasks/domain/TaskDescription'
import { TaskStatus } from '../../../../../../src/Contexts/Mooc/Tasks/domain/TaskStatus'
import { TaskTitle } from '../../../../../../src/Contexts/Mooc/Tasks/domain/TaskTitle'
import { FileTaskRepository } from '../../../../../../src/Contexts/Mooc/Tasks/infrastructure/persistence/FileTaskRepository'

describe('FileTaskRepository', () => {
  it('should save a task', async () => {
    const repository = new FileTaskRepository()
    const expectedTask = new Task({
      id: new TaskId('fb966fc1-4b03-4e5e-ad92-efbb399a0f78'),
      title: new TaskTitle('Task 1'),
      description: new TaskDescription('Description 1'),
      status: TaskStatus.STATES.getValue('PENDING')
    })

    await repository.save(expectedTask)
    const task = await repository.search('fb966fc1-4b03-4e5e-ad92-efbb399a0f78')
    expect(task).toEqual(expectedTask)
  })
})
