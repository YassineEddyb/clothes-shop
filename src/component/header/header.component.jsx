import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <ul className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
