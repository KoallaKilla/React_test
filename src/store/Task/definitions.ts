import { CommentId } from "../Comment"

export type TaskId = string

export enum TaskStatus {
    Queue = "Queue",
    Development = "Development",
    Done = "Done",
}

export type Task = {
    id: TaskId
    title: string
    description: string
    status: TaskStatus
    createdAt: Date
    inProgressSeconds: number
    attachments: {
        [name: string]: Blob
    }
}

export type TaskStore = {
    tasks: { [taskId: TaskId]: Task }
    taskComments: { [taskId: TaskId]: CommentId[] }
    subTasks: { [taskId: TaskId]: TaskId[] }
}
