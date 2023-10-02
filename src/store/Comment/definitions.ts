export type CommentId = string

export type Comment = {
    commentId: CommentId
    text: string
    createdAt: Date
    repliesIds: CommentId[]
}

export type CommentStore = {
    comments: { [commentId: CommentId]: Comment }
}
