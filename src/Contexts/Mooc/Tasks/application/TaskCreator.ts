import { Task } from '../domain/Task'
import { type TaskRepository } from '../domain/TaskRepository'

export class TaskCreator {
  constructor(private readonly repository: TaskRepository) {}

  async run(
    id: string,
    title: string,
    description: string,
    status: string
  ): Promise<void> {
    const task = new Task(id, title, description, status)
    await this.repository.save(task)
  }
}
