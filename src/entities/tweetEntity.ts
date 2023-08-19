import { User } from "./userEntity";

export class Tweet extends User{
    user: User;
    tweet: string;
    constructor(user: User, tweet: string){
        super(user.username, user.avatar);
        this.tweet = tweet;
    }
}