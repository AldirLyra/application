import { Owner } from "./owner";

export interface UsersWithStars {
    name: string;
    description: string;
    html_url: string;
    owner: Owner;
}
