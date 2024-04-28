import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  // Receive the post object as props
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark btn"
        onClick={()=>deletePost(post.id)}>  

          <RiDeleteBin6Line />
        </span>

        <p className="card-text">{post.body}</p>
        {post.tag.map((tag) => (
          <span key={tag} className="badge  rounded-pill text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          Post reacted by {post.reaction} peoples.
        </div>
      </div>
    </div>
  );
}

export default Post;
