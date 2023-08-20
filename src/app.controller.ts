import { Body, Controller, Get, HttpCode, Post, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserDTO } from './dtos/userDTO';
import { createTweetDTO } from './dtos/tweetDTO';
import { Tweet } from './entities/tweetEntity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post("/sign-up")
  @HttpCode(200)
  signUp(@Body() body: createUserDTO){
    return this.appService.createUser(body);
  }

  @Post("/tweets")
  createTweet(@Body() body: createTweetDTO){
    try{
      return this.appService.createTweet(body);
    } catch(error){
      throw error;
    }
  }

  @Get("/tweets")
  @HttpCode(200)
  getTweets(@Query('page') page: number): Array<Tweet> {
    return this.appService.getTweets(page);
  }

  @Get('/tweets/:username')
  @HttpCode(200)
  getTweetsByUser(@Param('username') username: string){
    return this.appService.getTweetsByUser(username);
  }

}
