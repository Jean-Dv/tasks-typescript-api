import { type Request, type Response, type Router } from 'express'
import { body } from 'express-validator'
import container from '../dependency-injection'
import { validateReqSchema } from '.'

/**
 * Run the task put controller when a put request is made to the task route.
 *
 * @param router The router to register the route to.
 * @returns Nothing.
 */
export const register = (router: Router): void => {
  const reqSchema = [
    body('id').exists().isString(),
    body('title').exists().isString(),
    body('description').exists().isString(),
    body('status').exists().isString()
  ]
  const taskPutController = container.get(
    'Apps.mooc.controllers.TaskPutController'
  )
  router.put(
    '/tasks/:id',
    reqSchema,
    validateReqSchema,
    (req: Request, res: Response) => taskPutController.run(req, res)
  )
}
