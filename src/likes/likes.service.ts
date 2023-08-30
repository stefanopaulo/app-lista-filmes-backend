import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Like } from './schemas/like.schema';
import { Model } from 'mongoose';

@Injectable()
export class LikesService {
    constructor(@InjectModel(Like.name) private likeModel: Model<Like>) {}

    async likeMovie(movieId: string): Promise<void> {
        await this.likeModel.findOneAndUpdate(
          { movieId },
          { $inc: { count: 1 } },
          { upsert: true },
        );
      }
}
