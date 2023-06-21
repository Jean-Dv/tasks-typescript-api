import { type TaskId } from '../../Shared/domain/Tasks/TaskId'
import { type TaskDescription } from './TaskDescription'
import { type TaskState } from './TaskState'
import { type TaskTitle } from './TaskTitle'

/**
 * Task entity
 * @param {object} params
 */
export class Task {
  readonly id: TaskId
  readonly title: TaskTitle
  readonly description: TaskDescription
  readonly status: TaskState

  /**
   * @param {object} params
   * @param {string} params.id
   * @param {string} params.title
   * @param {string} params.description
   * @param {string} params.status
   * @example
   * const task = new Task({
   *    id: '1',
   *    title: 'Task 1',
   *    description: 'Description of task 1',
   *    status: 'pending'
   * })
   */
  constructor({
    id,
    title,
    description,
    status
  }: {
    id: TaskId
    title: TaskTitle
    description: TaskDescription
    status: TaskState
  }) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
  }
}
