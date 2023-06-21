import { type StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { EnumValueObject } from '../../../Shared/domain/value-object/EnumValueObject'
import { TaskState } from './TaskState'

export class TaskStatus extends EnumValueObject<StringValueObject> {
  public static readonly STATES = new TaskStatus({
    PENDING: new TaskState('pending'),
    BACKLOG: new TaskState('backlog'),
    TODO: new TaskState('to do'),
    IN_PROGRESS: new TaskState('in progress'),
    BLOCKED: new TaskState('blocked'),
    CODE_REVIEW: new TaskState('code review'),
    DONE: new TaskState('done')
  })
}
