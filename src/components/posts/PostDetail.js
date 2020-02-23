import React from "react";
import { connect } from "react-redux";

const PostDetail = ({ post }) => {
  if (!post) {
    return <div>Select a post</div>;
  }

  return (
    <div className="description">
      <h2>{post.title}</h2>
      <br />
      <p>{post.body}</p>
    </div>
  );
};

const mapStateToProps = state => {
  // State property has access to all the reducers key:value refer combineReducers in reducers/index.js
  return {
    post: state.selectedPost
  };
};

export default connect(mapStateToProps)(PostDetail);
