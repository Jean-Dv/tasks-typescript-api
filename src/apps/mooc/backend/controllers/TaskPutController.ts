import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type Controller } from './Controller'

export class TaskPutController implements Controller {
  async run(_req: Request, res: Response): Promise<void> {
    res.status(httpStatus.CREATED).send()
  }
}
