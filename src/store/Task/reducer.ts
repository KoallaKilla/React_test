import { ActionTypes, Actions } from "../actions";
import { TaskStatus, TaskStore } from "./definitions";

export function createTasksStore(): TaskStore {
    return {
        tasks: {
            "1": {
                id: "1",
                title: "Hello world",
                            
                description: "asdfasdfasdfasd sadff asdf dsa",
                status: TaskStatus.Queue,
                createdAt: new Date(),
                inProgressSeconds: 0,
                attachments: {}
            },

            "2": {
                id: "2",
                title: "The Second",
                            
                description: "yeah yeah yeah",
                status: TaskStatus.Queue,
                createdAt: new Date(),
                inProgressSeconds: 0,
                attachments: {}
            },

            "3": {
                id: "3",
                title: "The Third",
                            
                description: "most eat grapes",
                status: TaskStatus.Queue,
                createdAt: new Date(),
                inProgressSeconds: 0,
                attachments: {}
            }
        },
        subTasks: {},
        taskComments: {},
    }
}

export function tasksReducer(
    state: TaskStore = createTasksStore(),
    action: Actions
): TaskStore {
    switch (action.type) {
    case ActionTypes.CommentTask: {
        const taskComments = state.taskComments[action.payload.taskId]

        if (!taskComments) {
            return state
        }

        return {
            ...state,
            taskComments: {
                ...state.taskComments,
                [action.payload.taskId]: [
                    ...taskComments,
                    action.payload.comment.commentId
                ]
            }
        }
    }
    case ActionTypes.MoveTask: {
        const task = state.tasks[action.payload.taskId]

        if (!task) {
            return state
        }

        const newTask = { ...task, status: action.payload.newStatus }

        return {
            ...state,
            tasks: {
                ...state.tasks,
                [newTask.id]: newTask
            }
        }
    }
    default:
        return state
    }
}
