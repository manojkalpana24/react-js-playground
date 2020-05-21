import React from "react";
import { createPost } from "../../actions/postsAction";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import LanguageContext from "../../contexts/LanguageContext";

class PostCreate extends React.Component {
  static contextType = LanguageContext;
  onSubmit = (formValues) => {
    formValues.user_id = 2;
    this.props.createPost(formValues);
  };

  render() {
    const createPostText =
      this.context === "english" ? "Create a Post" : "கிரியேட் போஸ்ட்";
    return (
      <div>
        <h3>{createPostText}</h3>
        <PostForm onSubmit={this.onSubmit}></PostForm>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostCreate);
