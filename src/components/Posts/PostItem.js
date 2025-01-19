import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserById } from "../../store/slices/usersSlice";

const PostItem = ({ id, title, body }) => {
   const postAuthor = useSelector((state) => selectUserById(state, id));
   return (
      <div className="border border-white rounded-xl p-3 text-white" key={id}>
         <h3 className="text-2xl mb-2 capitalize">{title}</h3>
         <p className="mb-2">{body}</p>
         {postAuthor ? (
            <p className="mb-2">Author: {postAuthor.username}</p>
         ) : (
            <p className="mb-2">Author: user</p>
         )}

         <Link
            className="underline hover:no-underline"
            to={`/blogApp/post/${id}`}
         >
            Read more
         </Link>
      </div>
   );
};

export default PostItem;
