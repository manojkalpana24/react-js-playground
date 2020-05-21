import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchPost, editPost } from "../../actions/postsAction";
import PostForm from "./PostForm";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPost(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Post</h3>
        <PostForm
          initialValues={_.pick(this.props.post, "title", "description")}
          onSubmit={this.onSubmit}
        ></PostForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchPost, editPost })(PostEdit);