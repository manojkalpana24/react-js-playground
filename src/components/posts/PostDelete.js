import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchPost, deletePost } from "../../actions/postsAction";
import { connect } from "react-redux";

const PostDelete = (props) => {
  useEffect(() => {
    props.fetchPost(props.match.params.id);
  }, []);

  const renderActions = () => {
    const { id } = props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => props.deletePost(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/posts/list" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  return (
    <div>
      PostDelete
      <Modal
        title="Delete Post"
        content="Are you sure you want to delete post ?"
        actions={renderActions()}
        onDismiss={() => history.push("/posts/list")}
      ></Modal>
    </div>
  );
};

export default connect(null, { fetchPost, deletePost })(PostDelete);
