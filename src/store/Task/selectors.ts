import { ProjectId } from "../Project/definitions";
import { RootStore } from "../RootStore";
import { Task, TaskId } from "./definitions";

export function selectTaskById(state: RootStore, taskId: TaskId): Task | undefined {
    return state.tasksStore.tasks[taskId]
}

export function selectProjectTasks(state: RootStore, projectId: ProjectId): Task[] {
    const taskIds = state.projectsStore.projectTasks[projectId]

    if (!taskIds) {
        return []
    }

    return taskIds
        .map((taskId) => selectTaskById(state, taskId)) as Task[]
}
