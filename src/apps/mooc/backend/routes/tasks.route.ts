import { type Request, type Response, type Router } from 'express'
import container from '../dependency-injection'

/**
 * Run the task put controller when a put request is made to the task route.
 *
 * @param router The router to register the route to.
 * @returns Nothing.
 */
export const register = (router: Router): void => {
  const taskPutController = container.get(
    'Apps.mooc.controllers.TaskPutController'
  )
  router.put('/tasks/:id', (req: Request, res: Response) =>
    taskPutController.run(req, res)
  )
}
