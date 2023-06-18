export class Task {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly status: string

  constructor(id: string, title: string, description: string, status: string) {
    this.id = id
    this.title = title
    this.description = description
    this.status = status
  }
}
