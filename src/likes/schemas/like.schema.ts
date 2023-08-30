import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Like extends Document {
  @Prop({ required: true })
  movieId: string;

  @Prop({ default: 0 })
  count: number;
}

export const LikeSchema = SchemaFactory.createForClass(Like);
