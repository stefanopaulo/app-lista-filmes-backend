import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LikeDocument } from './interfaces/like-document.interface';
import { Like } from './interfaces/like.interface';

@Injectable()
export class LikesService {
  constructor(@InjectModel('Like') private likeModel: Model<LikeDocument>) {}

  async create(like: Like): Promise<Like> {
    const createdLike = new this.likeModel(like);
    return createdLike.save();
  }
}
