import Link from 'next/link';
import { useState, useEffect } from 'react';
import PostedTime from '../components/PostedTime';

type Post = {
  _id: string;
  userId: string;
  content: string;
  createdAt: Date;
};

function Rewind() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('/api/posts')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        setPosts(data);
      });
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    setLoading(true);
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 'userId',
        content: content,
      }),
    });
    setContent('');
    fetchPosts();
    setLoading(false);
  };

  return (
    <div>
      <Link href={'/pastrewind'}>昨日のつぶやき</Link>
      <h2>つぶやき</h2>
      <form action=''>
        <input
          type='text'
          name=''
          id=''
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          placeholder='つぶやきを入力'
        />

        <button
          type='submit'
          disabled={loading}
          className=''
          onClick={(e) => {
            handlePost(e);
          }}
        >
          {loading ? '投稿中...' : '投稿する'}
        </button>
      </form>
      <br />
      <h2>つぶやき一覧</h2>
      {posts.map((item) => (
        <div
          key={item._id}
          className=' border-gray-300 p-2'
        >
          <PostedTime timestamp={item.createdAt} />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Rewind;
