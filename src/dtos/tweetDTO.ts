import { IsString, IsNotEmpty, IsUrl } from 'class-validator'

export class createTweetDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    tweet: string;
}