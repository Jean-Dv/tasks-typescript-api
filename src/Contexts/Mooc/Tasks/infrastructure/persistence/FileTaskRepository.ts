import { BSON } from 'bson'
import fs from 'fs'
import path from 'path'
import { type Task } from '../../domain/Task'
import { type TaskRepository } from '../../domain/TaskRepository'

export class FileTaskRepository implements TaskRepository {
  private readonly FILE_PATH = path.join(__dirname, '/tasks')

  async save(task: Task): Promise<void> {
    await fs.promises.writeFile(this.filePath(task.id), BSON.serialize(task))
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`
  }
}
