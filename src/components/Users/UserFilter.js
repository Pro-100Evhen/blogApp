import React from "react";
import { Link } from "react-router-dom";

const UserFilter = ({ id, name, username, email }) => {
   return (
      <div className="border border-white rounded-xl p-3 text-white" key={id}>
         <h3 className="text-2xl mb-2 capitalize">Username: {username}</h3>
         <p className="mb-2">Name: {name}</p>
         <p className="mb-2">Email: {email}</p>
         <Link className="underline hover:no-underline" to={`/user/${id}`}>
            Read more
         </Link>
      </div>
   );
};

export default UserFilter;
