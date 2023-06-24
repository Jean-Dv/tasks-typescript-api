import { serialize, deserialize } from 'bson'
import fs from 'fs'
import path from 'path'
import { Task } from '../../domain/Task'
import { type TaskRepository } from '../../domain/TaskRepository'
import { TaskId } from '../../../Shared/domain/Tasks/TaskId'
import { TaskTitle } from '../../domain/TaskTitle'
import { TaskDescription } from '../../domain/TaskDescription'
import { TaskState } from '../../domain/TaskState'

/**
 * File implementation for Task repository
 * @implements TaskRepository
 */
export class FileTaskRepository implements TaskRepository {
  private readonly FILE_PATH = path.join(__dirname, '/tasks')

  /**
   * Persists a task
   * @param {Task} task - Task to persist
   * @returns {Promise<void>}
   */
  async save(task: Task): Promise<void> {
    await fs.promises.writeFile(this.filePath(task.id.value), serialize(task))
  }

  /**
   * Search a task by id
   * @param {string} taskId - Task id
   * @returns {Promise<Task>}
   */
  async search(taskId: string): Promise<Task> {
    const taskData = await fs.promises.readFile(this.filePath(taskId))
    const { id, title, description, status } = deserialize(taskData)
    return new Task({
      id: new TaskId(id.value),
      title: new TaskTitle(title.value),
      description: new TaskDescription(description.value),
      status: new TaskState(status.value)
    })
  }

  /**
   * Returns the file path for a task
   * @param {string} id - Task id
   * @returns {string} example: task.123.repo
   */
  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`
  }
}
