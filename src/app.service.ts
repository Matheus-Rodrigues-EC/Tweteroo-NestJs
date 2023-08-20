import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/userEntity';
import { Tweet } from './entities/tweetEntity';
import { createUserDTO } from './dtos/userDTO';
import { createTweetDTO } from './dtos/tweetDTO';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor(){
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  createUser(body: createUserDTO){
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }

  createTweet(body: createTweetDTO){
    const user = this.users.find( user => user.username === body.username);
    if(!user) throw new HttpException(`User not authorized`, HttpStatus.UNAUTHORIZED);
    const tweet = new Tweet({username: user.username, avatar: user.avatar}, body.tweet);
    return this.tweets.push(tweet);
  }

  getTweets(){
    if(this.tweets.length >= 15){
      const tweets = this.tweets.slice(-15);
      return tweets;
    }else{
      return this.tweets;
    }
  }
}
