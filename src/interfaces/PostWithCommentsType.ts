import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type PostWithCommentsType = IPost & { comments: IComment[] }