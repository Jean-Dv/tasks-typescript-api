import { type Task } from './Task'

/**
 * Interface for Task repository
 * @method save - Persists a task
 */
export interface TaskRepository {
  save: (task: Task) => Promise<void>
}
