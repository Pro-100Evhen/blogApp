import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, postsSelector } from "../../store/slices/postsSlice";
import { Link } from "react-router-dom";

const PostsList = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchPosts());
   }, [dispatch]);

   const posts = useSelector(postsSelector);
   const status = useSelector((state) => state.posts.status);

   if (status === "loading") {
      return <p>Loading...</p>;
   }

   if (status === "failed") {
      return <p>Failed to load posts.</p>;
   }

   return (
      <div className=" py-2.5 ">
         <h2 className="text-white font-semibold mb-5 text-4xl">Posts</h2>

         <div className="gap-3 flex flex-col">
            {posts.length > 0 ? (
               posts.map((post) => (
                  <div
                     className="border border-white rounded-xl p-3 text-white"
                     key={post.id}
                  >
                     <h3 className="text-2xl mb-2 capitalize">{post.title}</h3>
                     <p className="mb-2">{post.body}</p>
                     <Link
                        className="underline hover:no-underline"
                        to={`/post/${post.title}`}
                     >
                        Read more
                     </Link>
                  </div>
               ))
            ) : (
               <p>No posts available.</p>
            )}
         </div>
      </div>
   );
};

export default PostsList;
