import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPostById } from "../../store/slices/postsSlice";
import { selectUserById } from "../../store/slices/usersSlice";

export const SinglePost = () => {
   const { postId } = useParams();
   const post = useSelector((state) => selectPostById(state, postId));
   const postAuthor = useSelector((state) => selectUserById(state, postId));

   if (!post) {
      return <p>Post not found!</p>;
   }

   return (
      <div className="mx-auto max-w-screen-xl  py-7  h-[calc(100vh-60px)] text-white  flex flex-col">
         <h3 className="text-4xl mb-5">Post title: {post.title}</h3>
         <p className="text-xl">Post content: {post.body}</p>
         {postAuthor ? <p>Author: {postAuthor.name}</p> : <p>Author: user</p>}
      </div>
   );
};
