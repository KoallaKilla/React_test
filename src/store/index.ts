import { createStore, combineReducers } from 'redux'
import { projectsReducer } from './Project/reducer'
import { tasksReducer } from './Task/reducer'
import { commentsReducer } from './Comment/reducer'

export function createRootStore() {
    const rootStore = createStore(combineReducers({
        projectsStore: projectsReducer,
        tasksStore: tasksReducer,
        commentsStore: commentsReducer,
    }))

    return rootStore
}
