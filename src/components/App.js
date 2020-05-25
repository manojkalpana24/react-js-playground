import React, { useState } from "react";
import { Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import PostDetail from "./posts/PostDetail";
import PostList from "./posts/PostList";
import "./App.css";
import PostCreate from "./posts/PostCreate";
import PostEdit from "./posts/PostEdit";
import history from "../history";
import PostDelete from "./posts/PostDelete";
import LanguageContext from "../contexts/LanguageContext";

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

const SelectLanguage = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      Select a language:
      <i
        className="flag us"
        onClick={() => props.onLanguageChange("english")}
      />
      <i className="flag in" onClick={() => props.onLanguageChange("tamil")} />
    </div>
  );
};

const PostListLayout = () => {
  return (
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
  );
};

const App = () => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  return (
    <div className="ui container">
      <Router history={history}>
        <SelectLanguage onLanguageChange={onLanguageChange}></SelectLanguage>
        <LanguageContext.Provider value={language}>
          <Header></Header>
          <div className="main-content">
            <Route path="/" exact component={Home}></Route>
            <Route path="/posts/create" component={PostCreate}></Route>
            <Route path="/posts/edit/:id" exact component={PostEdit}></Route>
            <Route path="/posts/delete/:id" component={PostDelete}></Route>
            <Route path="/posts/list" component={PostListLayout}></Route>
            <Route path="/**" exact component={PageNotFound}></Route>
          </div>
        </LanguageContext.Provider>
      </Router>
    </div>
  );
};

export default App;
