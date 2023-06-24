import { TaskCreator } from '../../../../../src/Contexts/Mooc/Tasks/application/TaskCreator'
import { TaskTitleLengthExceeded } from '../../../../../src/Contexts/Mooc/Tasks/domain/TaskTitleLengthExceeded'
import { TaskRepositoryMock } from '../__mocks__/TaskRepositoryMock'
import { TaskMother } from '../domain/TaskMother'
import { CreateTaskRequestMother } from './CreateTaskRequestMother'

let repository: TaskRepositoryMock
let creator: TaskCreator
describe('TaskCreator', () => {
  beforeEach(() => {
    repository = new TaskRepositoryMock()
    creator = new TaskCreator(repository)
  })

  it('should create a valid task', async () => {
    const request = CreateTaskRequestMother.random()
    const task = TaskMother.fromRequest(request)
    await creator.run(request)
    repository.assertSaveHaveBeenCalledWith(task)
  })

  it('should throw error if task title length is exceeded', async () => {
    await expect(async () => {
      const request = CreateTaskRequestMother.invalidRequest()
      const task = TaskMother.fromRequest(request)
      await creator.run(request)
      repository.assertSaveHaveBeenCalledWith(task)
    }).rejects.toThrow(TaskTitleLengthExceeded)
  })
})
