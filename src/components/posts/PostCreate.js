import React, { useContext } from "react";
import { createPost } from "../../actions/postsAction";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import LanguageContext from "../../contexts/LanguageContext";

const PostCreate = (props) => {
  const language = useContext(LanguageContext);

  const onSubmit = (formValues) => {
    formValues.user_id = 2;
    props.createPost(formValues);
  };

  const createPostText =
    language === "english" ? "Create a Post" : "கிரியேட் போஸ்ட்";

  return (
    <div>
      <h3>{createPostText}</h3>
      <PostForm onSubmit={onSubmit}></PostForm>
    </div>
  );
};

export default connect(null, { createPost })(PostCreate);
