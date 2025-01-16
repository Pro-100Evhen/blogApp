import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPostBytitle } from "../../store/slices/postsSlice";

export const SinglePost = () => {
   const { postTitle } = useParams();
   const post = useSelector((state) => selectPostBytitle(state, postTitle));

   if (!post) {
      return <p>Post not found!</p>;
   }

   return (
      <div>
         <h1>Post Details</h1>
         <p>This is the content for post ID: {post.title}</p>
         <p>{post.body}</p>
      </div>
   );
};
