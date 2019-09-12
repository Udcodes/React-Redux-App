import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../actions/actions";
import iconSVG from "../../public/images/redo-solid.svg";

const QuoteComponent = props => {
  return (
    <div className="card">
      <div className="top"></div>
      <div className="bottom">
        <button onClick={() => props.getQuote()}>
          <img src={iconSVG} alt="A redo icon" />
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  { getQuote }
)(QuoteComponent);
