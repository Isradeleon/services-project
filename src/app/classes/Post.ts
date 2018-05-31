import { User } from './User';
import { Comment } from './Comment';

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    user: User;
    comments: Comment[];
    iLikeIt: boolean;
}