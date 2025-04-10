import React from 'react';

type PostedTimeProps = {
  timestamp: Date;
};
const PostedTime: React.FC<PostedTimeProps> = ({ timestamp }) => {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleTimeString();
  return <div>{formattedDate}</div>;
};

export default PostedTime;
