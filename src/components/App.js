import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import PostDetail from "./posts/PostDetail";
import PostList from "./posts/PostList";
import "./App.css";
import PostCreate from "./posts/PostCreate";
import PostEdit from "./posts/PostEdit";
import history from "../history";

const Home = () => {
  return (
    <div className="home">
      <h1>React-Redux Boilerplate</h1>
      <Link to="/posts/create">
        <button className="ui basic button">Create Post</button>
      </Link>
    </div>
  );
};

const PageNotFound = () => {
  return <div></div>;
};

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header></Header>
        <div className="main-content">
          <Route path="/" exact component={Home}></Route>
          <Route path="/posts/create" component={PostCreate}></Route>
          <Route path="/posts/edit/:id" exact component={PostEdit}></Route>
          <Route path="/posts/list">
            <div className="ui two column padded grid">
              <div
                className="column"
                style={{
                  maxHeight: "600px",
                  overflowX: "scroll",
                  width: "300px",
                }}
              >
                <PostList></PostList>
              </div>
              <div className="column">
                <PostDetail></PostDetail>
              </div>
            </div>
          </Route>
          <Route path="**" component={PageNotFound}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
