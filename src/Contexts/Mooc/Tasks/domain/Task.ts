/**
 * Task entity
 * @param {object} params
 */
export class Task {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: string

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
    id: string
    title: string
    description: string
    status: string
  }) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
  }
}
