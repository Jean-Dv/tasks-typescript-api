import { FileTaskRepository } from '../../../../../../src/Contexts/Mooc/Tasks/infrastructure/persistence/FileTaskRepository'
import { TaskMother } from '../../domain/TaskMother'

describe('FileTaskRepository', () => {
  it('should save a task', async () => {
    const repository = new FileTaskRepository()
    const expectedTask = TaskMother.random()

    await repository.save(expectedTask)
    const task = await repository.search(expectedTask.id.value)
    expect(task).toEqual(expectedTask)
  })
})
