import { type Request, type Response } from 'express'
import httpStatus from 'http-status'
import { type TaskCreator } from '../../../../Contexts/Mooc/Tasks/application/TaskCreator'
import { type Controller } from './Controller'

/**
 * Extends Express Request interface with body params
 * @property {Object} body - Body params
 * @property {string} body.id - Task id
 * @property {string} body.title - Task title
 * @property {string} body.description - Task description
 * @property {string} body.status - Task status
 */
type TaskPutRequest = Request & {
  body: {
    id: string
    title: string
    description: string
    status: string
  }
}

/**
 * Controller for PUT /tasks/:id endpoint
 * @param {TaskCreator} taskCreator - Task creator
 * @returns {Promise<void>}
 */
export class TaskPutController implements Controller {
  constructor(private readonly taskCreator: TaskCreator) {}

  /**
   * Runs the controller
   * @param {TaskPutRequest} req - Express request
   * @param {Response} res - Express response
   * @example const taskPutController = new TaskPutController(taskCreator)
   * taskPutController.run(req, res)
   * @returns {Promise<void>}
   */
  async run(req: TaskPutRequest, res: Response): Promise<void> {
    try {
      const { id, title, description, status } = req.body
      await this.taskCreator.run({ id, title, description, status })
      res.status(httpStatus.CREATED).send()
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
    }
  }
}
