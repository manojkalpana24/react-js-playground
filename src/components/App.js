import React, { useState, Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import LanguageContext from "../contexts/LanguageContext";
import Loading from "./Loading";
import "./App.css";

const Home = React.lazy(() => import("./Home"));
const PageNotFound = React.lazy(() => import("./PageNotFound"));
const PostDetail = React.lazy(() => import("./posts/PostDetail"));
const PostList = React.lazy(() => import("./posts/PostList"));
const PostDelete = React.lazy(() => import("./posts/PostDelete"));
const PostCreate = React.lazy(() => import("./posts/PostCreate"));
const PostEdit = React.lazy(() => import("./posts/PostEdit"));

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
      <Suspense fallback={<Loading />}>
        <Router history={history}>
          <SelectLanguage onLanguageChange={onLanguageChange}></SelectLanguage>
          <LanguageContext.Provider value={language}>
            <Header></Header>
            <div className="main-content">
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/posts/create" component={PostCreate}></Route>
                <Route
                  path="/posts/edit/:id"
                  exact
                  component={PostEdit}
                ></Route>
                <Route path="/posts/delete/:id" component={PostDelete}></Route>
                <Route path="/posts/list" component={PostListLayout}></Route>
                <Route path="/**" exact component={PageNotFound}></Route>
              </Switch>
            </div>
          </LanguageContext.Provider>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
