import { TaskId } from '../../Shared/domain/Tasks/TaskId'
import { Task } from '../domain/Task'
import { TaskDescription } from '../domain/TaskDescription'
import { type TaskRepository } from '../domain/TaskRepository'
import { TaskStatus } from '../domain/TaskStatus'
import { TaskTitle } from '../domain/TaskTitle'
import { type CreateTaskRequest } from './CreateTaskRequest'

/**
 * Create a new Task
 * @param {TaskRepository} repository
 * @example
 * const taskCreator = new TaskCreator(repository)
 * await taskCreator.run('1', 'Task 1', 'Description of task 1', 'pending')
 * @returns {Promise<void>}
 */
export class TaskCreator {
  constructor(private readonly repository: TaskRepository) {}

  /**
   * Create a new Task
   * @param {string} id
   * @param {string} title
   * @param {string} description
   * @param {string} status
   * @returns {Promise<void>}
   */
  async run(request: CreateTaskRequest): Promise<void> {
    const task = new Task({
      id: new TaskId(request.id),
      title: new TaskTitle(request.title),
      description: new TaskDescription(request.description),
      status: TaskStatus.STATES.getValue(request.status)
    })
    await this.repository.save(task)
  }
}
