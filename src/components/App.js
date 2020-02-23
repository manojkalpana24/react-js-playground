import React from "react";
import PostDetail from "./posts/PostDetail";
import PostList from "./posts/PostList";

const App = () => {
  return (
    <div className="ui two column padded grid">
      <div className="column">
        <PostList />
      </div>
      <div className="column">
        <PostDetail />
      </div>
    </div>
  );
};

export default App;
