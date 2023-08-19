import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/userEntity';
import { Tweet } from './entities/tweetEntity';
// import { CreateUserDto } from './dtos/user.dto';
// import { CreateTweetDto } from './dtos/tweet.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor(){
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return "I'm Alive";
  }
}
