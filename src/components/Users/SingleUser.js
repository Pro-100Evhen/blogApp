import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserById } from "../../store/slices/usersSlice";
import { getPostsByAuthorId } from "../../store/slices/postsSlice";
import PostItem from "../Posts/PostItem";

const SingleUser = () => {
   const { userId } = useParams();
   const user = useSelector((state) => selectUserById(state, userId));
   const userPosts = useSelector((state) => getPostsByAuthorId(state, userId));

   if (!user) {
      return <p>User not found!</p>;
   }

   return (
      <div className="min-h-[calc(100vh-60px)] ">
         <div className="mx-auto max-w-screen-xl  py-7   text-white  flex flex-col">
            <h3 className="text-4xl mb-2">Username: {user.username}</h3>
            <h2 className="text-4xl mb-5">Name: {user.name}</h2>
            <p className="text-xl">Email: {user.email}</p>
            <p className="text-xl">Phone: {user.phone}</p>
            <p className="text-xl">Website: {user.website}</p>
            <p className="text-xl">
               Adress: city: {user.address.city} street: {user.address.street}
               suite: {user.address.suite}
            </p>
         </div>

         <div className="flex gap-4 flex-col">
            {userPosts.length > 0 && (
               <h2 className="text-white font-semibold mb-5 text-4xl">
                  User Posts:
               </h2>
            )}

            {userPosts.length > 0 ? (
               userPosts.map((post) => {
                  return <PostItem {...post} />;
               })
            ) : (
               <p className="text-white text-5xl font-semibold py-2">
                  This user have no posts
               </p>
            )}
         </div>
      </div>
   );
};

export default SingleUser;
