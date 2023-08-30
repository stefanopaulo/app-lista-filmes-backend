import * as mongoose from 'mongoose';

export const LikeSchema = new mongoose.Schema({
  movieId: String,
  userId: String,
  liked: Boolean,
});