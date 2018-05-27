import { User } from './User';

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    user: User;
}