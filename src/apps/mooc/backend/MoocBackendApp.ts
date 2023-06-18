import { Server } from './server'
import type * as http from 'http'

/**
 * The Mooc Backend App.
 *
 * @function start Starts the app.
 * @function stop Stops the app.
 */
export class MoocBackendApp {
  server?: Server

  get httpServer(): http.Server | undefined {
    return this.server?.getHttpServer()
  }

  /**
   * Starts the app.
   *
   * @returns A promise that resolves when the app has started.
   */
  async start(): Promise<void> {
    const port = process.env.PORT ?? '5000'
    this.server = new Server(port)
    await this.server.listen()
  }

  /**
   * Stops the app.
   *
   * @returns A promise that resolves when the app has stopped.
   */
  async stop(): Promise<void> {
    await this.server?.stop()
  }
}
