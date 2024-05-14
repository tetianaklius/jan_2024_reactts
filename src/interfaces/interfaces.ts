export interface IPost {
    userId: number,
    title: string,
    body: string,
    id?: number
}

export interface IPosts {
    posts: IPost[]
}
