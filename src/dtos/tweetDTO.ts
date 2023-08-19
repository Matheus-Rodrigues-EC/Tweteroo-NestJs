import { IsString, IsNotEmpty } from 'class-validator'

export class createTweetDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    tweet: string;
}