import { type Router, type Request, type Response } from 'express'
import StatusGetController from '../controllers/StatusGetController'

/**
 * Registers the status route.
 *
 * @param router The router to register the route to.
 * @returns Nothing.
 */
export const register = (router: Router): void => {
  const controller: StatusGetController = new StatusGetController()
  router.get('/status', (req: Request, res: Response) => {
    controller.run(req, res)
  })
}
