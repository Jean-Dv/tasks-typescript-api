export class Task {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: string

  constructor(params: {
    id: string
    title: string
    description: string
    status: string
  }) {
    this.id = params.id
    this.title = params.title
    this.description = params.description
    this.status = params.status
  }
}
