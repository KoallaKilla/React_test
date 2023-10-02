import { ActionTypes, Actions } from "../actions"
import { CommentStore } from "./definitions"

export function createCommentStore(): CommentStore {
    return { comments: {} }
}

export function commentsReducer(
    state: CommentStore = createCommentStore(),
    action: Actions
): CommentStore {
    switch (action.type) {
        case ActionTypes.CommentTask:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.comment.commentId]: action.payload.comment
                }
            }
        default:
            return state
    }
}
