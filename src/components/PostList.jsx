import React, { useContext } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/post-list-store';

function PostList() {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} /> // Pass the post object to the Post component
      ))}
    </>
  );
}

export default PostList;