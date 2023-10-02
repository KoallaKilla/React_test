import { ActionTypes, Actions } from "../actions";
import { ProjectStore } from "./definitions";

function createProjectsStore(): ProjectStore {
    return {
        projects: {
            "1": {
                projectId: "1",
                title: "My project",
                description: "My lovely project",
            }
        },
        projectTasks: {
            "1": ["1", "2", "3"],
        }
    }
}

export function projectsReducer(
    state: ProjectStore = createProjectsStore(),
    action: Actions
) {
    switch (action.type) {
    case ActionTypes.MoveTask: {
        const { taskId, projectId, placeAfterTaskId } = action.payload
        const projectTasks = state.projectTasks[projectId]
        const newTasks = projectTasks.filter((oldTaskId) => oldTaskId !== taskId)

        if (placeAfterTaskId) {
            const targetIndex = projectTasks.indexOf(placeAfterTaskId)

            if (targetIndex === -1) {
                console.error(`Can't find task #${taskId} in project #${projectId}`)
                return state
            }

            newTasks.splice(targetIndex + 1, 0, taskId)
        } else {
            newTasks.unshift(taskId)
        }

        return {
            ...state,
            projectTasks: {
                ...state.projectTasks,
                [projectId]: newTasks
            }
        }
    }
    default:
        return state
    }
}
