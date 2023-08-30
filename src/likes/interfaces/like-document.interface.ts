import mongoose from 'mongoose';
import { Like } from './like.interface';

export interface LikeDocument extends mongoose.Document, Like {}
