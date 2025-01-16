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
         </Route>

         <Route path="post">
            <Route path=":postId" element={<SinglePost />} />
         </Route>
      </Routes>
   );
}

export default App;
