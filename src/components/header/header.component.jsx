import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.css";
import { selectNomineesCount } from "../../redux/nominated/nominated.selctors";
import { createStructuredSelector } from "reselect";

const Header = ({ nomineeCount }) => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <h1>Demo-MovieStore</h1>
        </Link>
        <div className="nomination">
          <Link to="/nominees">
            <p>
              Number of Nominees: <span>{nomineeCount}</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  nomineeCount: selectNomineesCount,
});

export default connect(mapStateToProps)(Header);
