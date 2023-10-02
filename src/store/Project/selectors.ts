import type { RootStore } from "../RootStore";
import { Project, ProjectId } from "./definitions";


export function selectAllProjects(state: RootStore): Project[] {
    return Object.values(state.projectsStore.projects)
}

export function selectProjectById(state: RootStore, projectId: ProjectId): Project | undefined {
    return state.projectsStore.projects[projectId]
}
