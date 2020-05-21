import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchPost, deletePost } from "../../actions/postsAction";
import { connect } from "react-redux";

class PostDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/posts/list" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  render() {
    return (
      <div>
        PostDelete
        <Modal
          title="Delete Post"
          content="Are you sure you want to delete post ?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/posts/list")}
        ></Modal>
      </div>
    );
  }
}

export default connect(null, { fetchPost, deletePost })(PostDelete);
