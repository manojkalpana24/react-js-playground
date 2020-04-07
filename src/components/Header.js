import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = () => {
  return (
    <div>
      <div className="ui borderless main menu">
        <div className="ui text container">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/posts/list" className="item">
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {})(Header);
