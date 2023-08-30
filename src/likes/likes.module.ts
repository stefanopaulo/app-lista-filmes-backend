import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikesService } from './likes.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/movie_likes')],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
