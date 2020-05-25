import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div className="left floated author">
      <img className="ui avatar image" src="/matthew.png" alt="" />
      {user.name}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // State property has access to all the reducers key:value refer combineReducers in reducers/index.js
  // ownProps holds all the props of UserHeader component
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, {})(UserHeader);
