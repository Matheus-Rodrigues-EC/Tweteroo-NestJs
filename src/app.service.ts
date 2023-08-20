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

  getTweets(page?: number){
    if((page < 1)){
      throw new HttpException('Informe uma página válida!', HttpStatus.BAD_REQUEST);
    }else{
      if(page >= 1){
        const tweets = this.tweets.slice((-15 * page), (-15* (page - 1))).reverse();
        console.log((-15* (page - 1)))
        console.log((-15 * page))
        return tweets;
      }
    }
    if(this.tweets.length >= 15){
      const tweets = this.tweets.slice(-15).reverse();
      return tweets;
    }else{
      return this.tweets;
    }
  }

  getTweetsByUser(username: string){
    const tweetsByUser = [];
    this.tweets.find((user) => {if(user.username === username) tweetsByUser.push(user)});
    if(!tweetsByUser) return [];
    return tweetsByUser
  }
}
