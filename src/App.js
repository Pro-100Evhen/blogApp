import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Layout from "./components/Layout";
import PostsRow from "./components/Posts/PostsRow";
import { SinglePost } from "./components/Posts/SinglePost";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<PostsRow />} />
            <Route path="post/:postId" element={<SinglePost />} />
            <Route path="*" element={<p>Page not found</p>} />
         </Route>
      </Routes>
   );
}

export default App;
