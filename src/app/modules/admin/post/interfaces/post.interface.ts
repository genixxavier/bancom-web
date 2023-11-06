interface IPostBase {
    userId: number;
    title: string;
    body: string;
}

export interface IPost extends IPostBase {
    id: number;
}

export type IBodyPost = IPostBase;
