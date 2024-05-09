import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store';

function htmlForm() {
  const userIDref  = useRef();
  const postTitleref  = useRef();
  const postBodyref = useRef();
  const postTagsref  = useRef();
  const postReactionref  = useRef();

 const{addPost} =  useContext(PostList);
  
  const onsubmithandle=(event)=>{
   event.preventDefault();
   const userId = userIDref.current.value;
   const postTitle  = postTitleref.current.value;
   const postBody = postBodyref.current.value;
   const postTags = postTagsref.current.value.split(" ");
   const postReaction = postReactionref.current.value;
   addPost(userId, postTitle, postBody, postTags , postReaction);
  //  console.log(userId)
  }
  return (
    <form className='form' onSubmit={onsubmithandle}>
    <div className="mb-3">
      <label htmlFor="title" className="htmlForm-label">Post Title </label> 
      <input  ref={postTitleref} type="text" className="htmlForm-control title" id="title" placeholder='Enter the title....'/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="htmlForm-label">Post Body</label>
      <input ref={postBodyref} type="text" className="htmlForm-control" id="body" placeholder='Enter the body.... '/>
    </div>
    <div className="mb-3">
      <label htmlFor="reaction" className="htmlForm-label">Post Reaction</label>
      <input ref={postReactionref} type="number" className="htmlForm-control post-reaction" id="reaction" placeholder='Enter the reaction.... '/>
    </div>
    <div className="mb-3">
      <label htmlFor="userId" className="htmlForm-label">User Id</label>
      <input ref={userIDref} type="number" className="htmlForm-control userId" id="userId" placeholder='Enter the userId.... '/>
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="htmlForm-label">Post Tags</label>
      <input  ref={postTagsref} type="text" className="htmlForm-control tags" id="tags" placeholder='Enter the tags.... '/>
    </div>
    <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  )
}

export default htmlForm