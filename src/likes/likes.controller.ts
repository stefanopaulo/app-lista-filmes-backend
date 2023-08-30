import { Controller, Post, Body } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) {}

    @Post()
        async likeMovie(@Body() body: { movieId: string }): Promise<void> {
        await this.likesService.likeMovie(body.movieId);
    }
}
