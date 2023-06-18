import { Task } from '../domain/Task'
import { type TaskRepository } from '../domain/TaskRepository'

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
  async run(
    id: string,
    title: string,
    description: string,
    status: string
  ): Promise<void> {
    const task = new Task({ id, title, description, status })
    await this.repository.save(task)
  }
}
