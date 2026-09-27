export interface User {
    id: number;
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
    created_at: string;
    updated_at: string;
}