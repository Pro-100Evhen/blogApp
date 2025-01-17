import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, usersSelector } from "../../store/slices/usersSlice";
import { Link } from "react-router-dom";
import UserFilter from "./UserFilter";

const UsersList = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchUsers());
   }, [dispatch]);

   const users = useSelector(usersSelector);
   const status = useSelector((state) => state.users.status);
   if (status === "loading") {
      return <p>Loading...</p>;
   }

   if (status === "failed") {
      return <p>Failed to load posts.</p>;
   }

   return (
      <div className=" py-2.5 ">
         <h2 className="text-white font-semibold mb-5 text-4xl">Users</h2>

         <div className="gap-3 flex flex-col">
            {users.length > 0 ? (
               users.map((user) => <UserFilter key={user.id} {...user} />)
            ) : (
               <p>No users available.</p>
            )}
         </div>
      </div>
   );
};

export default UsersList;
