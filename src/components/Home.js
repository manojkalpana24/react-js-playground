import React from "react";
import { Link } from "react-router-dom";

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
export default Home;
