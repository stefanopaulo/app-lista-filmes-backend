import { Body, Controller, Post } from '@nestjs/common';

import { Like } from './interfaces/like.interface';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  async likeMovie(@Body() like: Like): Promise<Like> {
    return this.likesService.create(like);
  }
}
