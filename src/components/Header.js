import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LanguageContext from "../contexts/LanguageContext";

class Header extends React.Component {
  static contextType = LanguageContext;

  render() {
    const homeText = this.context === "english" ? "Home" : "ஹோம்";
    const postsText = this.context === "english" ? "Posts" : "போஸ்ட்";
    return (
      <div>
        <div className="ui borderless main menu">
          <div className="ui text container">
            <Link to="/" className="item">
              {homeText}
            </Link>
            <Link to="/posts/list" className="item">
              {postsText}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(Header);
