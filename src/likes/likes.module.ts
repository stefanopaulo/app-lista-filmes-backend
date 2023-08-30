import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikesService } from './likes.service';
import { LikeSchema } from './schemas/like.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
