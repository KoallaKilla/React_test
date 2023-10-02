import { TaskId } from "../Task"

export type ProjectId = string

export type Project = {
    projectId: ProjectId
    title: string
    description: string
}

export type ProjectStore = {
    projects: { [projectId: ProjectId]: Project }
    projectTasks: { [projectId: ProjectId]: TaskId[] }
}
