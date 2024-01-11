import React from "react";
import "./list.styles.css";
import { connect } from "react-redux";
import { removeNominee } from "../../redux/nominated/nominated.actions";

const List = ({ item, removeNominee }) => {
  const { Title, Year, Poster } = item;
  return (
    <div className="list">
      <div className="list-img" style={{ backgroundImage: `url(${Poster})` }} />

      <div className="list-details">
        <p className="title">{Title}</p>
        <p className="year">
          <span>Year:</span> {Year}
        </p>
        {/* <p className="imdb">IMDB: {imdb}</p> */}
      </div>
      <button className="nominate" onClick={() => removeNominee(item)}>
        Remove Nominee
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeNominee: (nominee) => dispatch(removeNominee(nominee)),
});

export default connect(null, mapDispatchToProps)(List);
