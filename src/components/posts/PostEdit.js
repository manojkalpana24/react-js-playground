import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost, editPost } from "../../actions/postsAction";
import PostForm from "./PostForm";
import LanguageContext from "../../contexts/LanguageContext";

const PostEdit = (props) => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    props.editPost(props.match.params.id, formValues);
  };

  if (!props.post) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "Edit a Post" : "எடிட் போஸ்ட்")}
        </LanguageContext.Consumer>
      </h3>
      <PostForm
        initialValues={_.pick(props.post, "title", "description")}
        onSubmit={onSubmit}
      ></PostForm>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchPost, editPost })(PostEdit);
