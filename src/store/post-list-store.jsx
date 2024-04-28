import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Dhampur",
    body: "ufsguhsgfuhzdfgjksdasfkahdsfkdfskaLDFAJdfjkdsjfg",
    reaction: 0,
    userId: "",
    tag: ["vacation", "dhampur"],
  },
  {
    id: "2",
    title: "Go to Moradabad",
    body: "ufsguhsgfuhzdfgjksdasfkahdsfkdfskaLDFAJdfjkdsjfg",
    reaction: 0,
    userId: "",
    tag: ["vacation", "moradabad"],
  },
];

const postListReducer = (currentPostList, action) => {
  var newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if (action.type === "ADD_POST"){
     newPostList = [action.payload, ...currentPostList]   // action.payload mai new post ka data aayega or 
                                                          //current wale array mai add ho jayega !

  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, postTags, postReaction) => {
    // console.log(userId)   yaha tak working value aarhi hai !
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: postReaction,
        userId: userId,
        tag: postTags,
      },
    });
  };
  const deletePost = (postId) => {
    // console.log(postId)
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
