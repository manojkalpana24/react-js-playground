import React from "react";
import { createPost } from "../../actions/postsAction";
import { connect } from "react-redux";
import PostForm from "./PostForm";

class PostCreate extends React.Component {
  onSubmit = (formValues) => {
    formValues.user_id = 2;
    this.props.createPost(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Post</h3>
        <PostForm onSubmit={this.onSubmit}></PostForm>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostCreate);
