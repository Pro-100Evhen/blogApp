import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/slices/postsSlice";

const AddPostFom = () => {
   const dispatch = useDispatch();
   const [postTitle, setPostTitle] = useState("");
   const [postContent, setPostContent] = useState("");

   function postTitleHandler(event) {
      setPostTitle(event.target.value);
   }
   function postContentHandler(event) {
      setPostContent(event.target.value);
   }

   function addPostHandler(event) {
      event.preventDefault();
      dispatch(addPost({ id: 102, title: postTitle, body: postContent }));
      setPostTitle("");
      setPostContent("");
   }

   const canSave = [postTitle, postContent].every(Boolean);

   return (
      <div className=" py-2.5 ">
         <h2 className="text-white font-semibold mb-5 text-4xl">Add Post</h2>

         <form
            className="gap-3 flex border border-white rounded-xl p-3 flex-col text-white font-semibold text-xl"
            onSubmit={(event) => addPostHandler(event)}
         >
            <label htmlFor="PostTitle">Post Title</label>
            <input
               id="PostTitle"
               name="PostTitle"
               value={postTitle}
               onChange={(event) => postTitleHandler(event)}
               placeholder="Enter post title"
               className="p-2 rounded-lg text-slate-900"
            />
            <label htmlFor="PostContent">Post Content</label>
            <textarea
               id="PostContent"
               name="PostContent"
               value={postContent}
               onChange={(event) => postContentHandler(event)}
               placeholder="Enter post content"
               className="p-2 rounded-lg text-slate-900"
            />

            <button
               disabled={!canSave}
               className="p-2 rounded-lg border-[2px] border-slate-900  bg-slate-900 transition-all duration-300 hover:text-slate-900 hover:bg-gray-700"
               type="submit"
            >
               Add post
            </button>
         </form>
      </div>
   );
};

export default AddPostFom;
