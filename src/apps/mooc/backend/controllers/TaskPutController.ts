import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type TaskCreator } from '../../../../Contexts/Mooc/Tasks/application/TaskCreator'
import { type Controller } from './Controller'

type TaskPutRequest = Request & {
  body: {
    id: string
    title: string
    description: string
    status: string
  }
}

export class TaskPutController implements Controller {
  constructor(private readonly taskCreator: TaskCreator) {}

  async run(req: TaskPutRequest, res: Response): Promise<void> {
    try {
      const { id, title, description, status } = req.body
      await this.taskCreator.run(id, title, description, status)
      res.status(httpStatus.CREATED).send()
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
    }
  }
}
