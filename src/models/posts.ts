// models/Post.ts
import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// 👇これが重要！
export const Post = models.Post || model('Post', PostSchema);
