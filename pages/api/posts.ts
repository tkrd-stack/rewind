import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/db';
import { Post } from '@/models/posts';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase().catch((error) => {
    console.error('Database connection error:', error);
    return res.status(500).json({ error: 'Database connection error' });
  });

  if (req.method === 'GET') {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    const { userId, content } = req.body;
    if (!userId || !content) {
      return res.status(400).json({ error: 'Missing userId or content' });
    }

    const post = await Post.create({ userId, content });
    return res.status(200).json({ status: 'ok', postId: post._id });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
