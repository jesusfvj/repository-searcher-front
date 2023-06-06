import { Repository } from "./repository";

export interface FollowerFollowing {
    login: string;
    avatarUrl: string;
    id: string;
    repositories: {
        nodes: Repository[];
    };
}