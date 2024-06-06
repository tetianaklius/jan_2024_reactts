import {IUser} from "./IUser";
import {IPost} from "./IPost";

export type UserWithPostsType = IUser & { posts: IPost[] }