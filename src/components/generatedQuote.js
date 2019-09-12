import React from "react";
import { connect } from "react-redux";
import quoteIcon from "../images/quotation.svg";
import { isPropertyAssignment } from "typescript";

const GeneratedQuote = props => {
  console.log("Props", props.quote);
  return (
    <div className="top">
      <div className="top-container">
        <img src={quoteIcon} alt="A quote icon" />
        <h3>{props.quote.content}</h3>
      </div>
      <h3 className="author">©{props.quote.author}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(GeneratedQuote);
