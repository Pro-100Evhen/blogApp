import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Layout from "./components/Layout";
import PostsRow from "./components/Posts/PostsRow";
import { SinglePost } from "./components/Posts/SinglePost";
import SingleUser from "./components/Users/SingleUser";

function App() {
   return (
      <Routes>
         <Route path="/blogApp/" element={<Layout />}>
            <Route index element={<PostsRow />} />
            <Route path="/blogApp/post/:postId" element={<SinglePost />} />
            <Route path="/blogApp/user/:userId" element={<SingleUser />} />
            <Route path="*" element={<p>Page not found</p>} />
         </Route>
      </Routes>
   );
}

export default App;
