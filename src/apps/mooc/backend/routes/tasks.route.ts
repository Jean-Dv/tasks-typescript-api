import { type Request, type Response, type Router } from 'express'
import container from '../dependency-injection'

export const register = (router: Router): void => {
  const taskPutController = container.get(
    'Apps.mooc.controllers.TaskPutController'
  )
  router.put('/tasks/:id', (req: Request, res: Response) =>
    taskPutController.run(req, res)
  )
}
