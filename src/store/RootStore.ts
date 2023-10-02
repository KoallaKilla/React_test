import { CommentStore } from "./Comment/definitions"
import { ProjectStore } from "./Project/definitions"
import { TaskStore } from "./Task/definitions"

export type RootStore = {
    projectsStore: ProjectStore,
    tasksStore: TaskStore,
    commentsStore: CommentStore,
}