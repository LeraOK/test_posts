
export interface IComment {
    id:number;
    postId:number;
    body: string;
}

export interface IPost{
    id: number;
    title: string;
    body: string;
    comments: IComment[]
}

export interface PostState{
    posts: IPost[];
    error: string;
}

export enum PostActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"
}
interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
    payload: IPost[];
}
interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}
export type PostAction = FetchPostsAction | FetchPostsErrorAction;
