import React from "react";
import PostsList from "./PostList";
import AddPostFom from "./AddPostFom";
import UsersList from "../Users/UsersList";

const PostsRow = () => {
   return (
      <div className="flex gap-4 justify-between  mx-auto max-w-screen-xl">
         <div className="w-3/5 h-full">
            <PostsList />
         </div>
         <div className="w-2/5 h-full">
            <AddPostFom />
            <UsersList />
         </div>
      </div>
   );
};

export default PostsRow;
