import { Post } from "./Post";
import { Album } from "./Album";
import { Todo } from "./Todo";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    posts: Post[];
    albums: Album[];
    todos: Todo[];
}