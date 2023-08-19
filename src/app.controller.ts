import { /*Body,*/ Controller, Get, HttpCode, /*HttpException, HttpStatus, Post*/ } from '@nestjs/common';
import { AppService } from './app.service';
// import { createUserDTO } from './dtos/userDTO';
// import { createTweetDTO } from './dtos/tweetDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHealth(): string {
    return this.appService.getHealth();
  }

}
