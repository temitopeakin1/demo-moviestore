import React from "react";
import { connect } from "react-redux";
import List from "../list/list.component";
import "./nominee.styles.css";
import { selectNomineesList } from "../../redux/nominated/nominated.selctors";
import { createStructuredSelector } from "reselect";

const NomineeList = ({ list }) => {
  // console.log(list);

  return (
    <div className="nominees-list">
      <h2>Nominations</h2>
      <div className="nominees-list-container">
        {list.map((listItem, index) => (
          <List key={index} item={listItem} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  list: selectNomineesList,
});

export default connect(mapStateToProps)(NomineeList);
