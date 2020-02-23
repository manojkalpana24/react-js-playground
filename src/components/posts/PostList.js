import React from "react";
import { connect } from "react-redux";
// Actions
import { fetchPostsAndUsers, selectPost } from "../../actions/postsAction";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    // mapStatesToProps holds 'posts' object
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
          <UserHeader userId={post.userId}></UserHeader>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectPost(post)}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStatesToProps = state => {
  // State property has access to all the reducers key:value refer combineReducers in reducers/index.js
  return { posts: state.posts };
};

// Export the component with react-redux connect() to make use of actions, reducers
export default connect(mapStatesToProps, { fetchPostsAndUsers, selectPost })(
  PostList
);
