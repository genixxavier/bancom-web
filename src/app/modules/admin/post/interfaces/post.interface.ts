interface IPostBase {
  userId: number;
  title: string;
  body: string;
}

export interface IPost extends IPostBase {
  id: number;
}

export interface IBodyPost extends IPostBase {}
