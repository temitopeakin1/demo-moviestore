import React, { useState } from "react";
import "./poster.styles.css";
import { connect } from "react-redux";
import { addNominee } from "../../redux/nominated/nominated.actions";

const Poster = ({ title, year, poster, res, addNominee }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  // const { Title, Year, Poster, imdbID } = result;
  console.log(res);

  // const handleDisable = () => {
  //   setActiveBtn(true);
  //   console.log("yaaay");
  //   console.log(activeBtn);
  // };

  return (
    <div className="poster">
       <div className="poster-img">
        <img src={poster} alt="poster" />
      </div>
      <div
        className="poster-img"
        style={{ backgroundImage: `url(${poster})` }}
      />

      <div className="poster-details">
        <p className="title">{title}</p>
        <p className="year">
          <span>Year:</span> {year}
        </p>
        {/* <p className="imdb">IMDB: {imdb}</p> */}
      </div>
      <button
        className="nominate"
        onClick={() => {
          addNominee(res);
        }}
      >
        Nominate
      </button>
    </div>
  );
};

// <button
//         className="nominate"
//         disabled={activeBtn}
//         onClick={(() => addNominee(res), handleDisable)}
//       >
//         Nominate
//       </button> 


const mapDispatchToProps = (dispatch) => ({
  addNominee: (nominee) => dispatch(addNominee(nominee)),
});

export default connect(null, mapDispatchToProps)(Poster);
