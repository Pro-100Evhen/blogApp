import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ id, title, body }) => {
   return (
      <div className="border border-white rounded-xl p-3 text-white" key={id}>
         <h3 className="text-2xl mb-2 capitalize">{title}</h3>
         <p className="mb-2">{body}</p>
         <Link className="underline hover:no-underline" to={`/post/${id}`}>
            Read more
         </Link>
      </div>
   );
};

export default PostItem;
