import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectUserById } from "../../store/slices/usersSlice";

const SingleUser = () => {
   const { userId } = useParams();
   const user = useSelector((state) => selectUserById(state, userId));

   if (!user) {
      return <p>Post not found!</p>;
   }

   return (
      <div className="mx-auto max-w-screen-xl  py-7  h-[calc(100vh-60px)] text-white  flex flex-col">
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
   );
};

export default SingleUser;
