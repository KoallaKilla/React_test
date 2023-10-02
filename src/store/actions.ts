import { Comment } from "./Comment";
import { ProjectId } from "./Project/definitions";
import { TaskId, TaskStatus } from "./Task";

export enum ActionTypes {
    CommentTask="commentTask",
    MoveTask="moveTask",
}

export type Action<Type extends ActionTypes, Payload> = {
    type: Type,
    payload: Payload
}

export type CommentTask = Action<ActionTypes.CommentTask, {
    taskId: TaskId
    comment: Comment
}>

export type MoveTask = Action<ActionTypes.MoveTask, {
    projectId: ProjectId,
    taskId: TaskId,
    placeAfterTaskId: TaskId | null,
    newStatus: TaskStatus,
}>

export type Actions = CommentTask | MoveTask
